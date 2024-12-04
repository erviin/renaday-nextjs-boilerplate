"use client"

import AuthorizedNav from "./authorized/nav";
import UnauthorizedNav from "./unauthorized/nav";
import { Session } from "next-auth";

export default function NavigationBar({ session }: { session: Session | null }) {
    return (session?.user?.email ? <AuthorizedNav /> : <UnauthorizedNav />);
}