"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { signIn, signOut } from "next-auth/react"
import { Button } from "../button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Session } from "next-auth";

export default function AccountOptions({ session }: { session: Session | null }) {
    return (<DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={session ? session?.user?.image ?? '' : "https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>{session ? session.user?.name : 'My Account'}</DropdownMenuLabel>
            <DropdownMenuSeparator className="border-b" />
            <DropdownMenuItem><a href="#">Profile</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#">Settings</a></DropdownMenuItem>
            <DropdownMenuItem>
                {session ?
                    <Button onClick={() => signOut()} variant={'ghost'} className="p-0 h-auto">Logout</Button>
                    :
                    <Button onClick={() => signIn('google')} variant={'ghost'} className="p-0 h-auto">Sign In</Button>
                }

            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>);
}

export function MobileAccountOptions({ session }: { session: Session | null }) {

    return (<div className="space-y-4 flex flex-col">
        <Link href="/docs/primitives/typography" title="Sub Contract">
            <div className="flex items-center space-x-2 py-1">
                <Avatar>
                    <AvatarImage src={session ? session.user?.image ?? '' : "https://github.com/shadcn.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full justify-center">
                    <h2>{session ? session.user?.name : 'My Account'}</h2>
                    <div className="flex justify-between items-center">
                        <span className="font-normal text-xs text-gray-600">Go to profile</span>
                        <ChevronRight className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </Link>
        <Link href="/docs/primitives/typography">
            <div className="flex justify-between font-semibold py-1">
                <h4>Settings</h4>
                <ChevronRight className="h-4 w-4" />
            </div>
        </Link>
        <Button variant={'link'} onClick={session ? () => signOut() : () => signIn('google')} className="flex justify-between font-semibold px-0 py-1">
            <h4> {session ? 'Logout'
                :
                'Sign In'
            }</h4>
            <ChevronRight className="h-4 w-4" />
        </Button>
    </div>);

}
