import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const shortenAddress = (text: string | null) => {
  if (text == null) {
    return "";
  }
  return text.substring(0, 3) + ".." + text.substring(text.length - 3, text.length)
}

export const chainIds = {
  "testNet": "LISK SEPOLIA",
  "testNetID": "4202"
  // "testNetID": "31337"
}

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt'
  },
  jwt: {
    // A secret to use for key generation. Defaults to the top-level `secret`.
    secret: process.env.AUTH_SECRET,
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: (90 * 24) * 60,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("jwt fired", user)
        const userDB = await prisma.user.findFirst({
          where: { email: user.email ?? '' },
        });

        if (!userDB) {
          const newUser = await prisma.user.create({
            data: {
              email: user.email ?? '',
              googleId: user.id,
              name: user.name,
              image: user.image,
            },
          });
          token.id = newUser.id;
        } else {
          token.id = userDB.id;
        }
      }
      return token;
    },

    async session({ session, token }) {
      const id: string = token.id as string;
      session.user.id = id;
      return session;
    },
    async signIn({ account }) {
      if (account?.provider === "google") {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: '/',
  },
}

