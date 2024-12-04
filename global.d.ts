import { DefaultSession, User } from "next-auth";

// Extend the default NextAuth session object
declare module "next-auth" {
    interface Session {
        user: User
    }
    interface JWT {
        id?: string; // Add your custom fields here
        name?: string | null;
        email?: string | null;
        picture?: string | null;
        sub?: string;
    }
}