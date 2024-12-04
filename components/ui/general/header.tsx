import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/search-icon";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WalletButton } from "@/components/ui/general/connect_wallet";
import AccountOptions from "@/components/ui/general/account_options";
import NavigationBar from "@/components/ui/general/nav";
import Image from "next/image";
import Link from "next/link";
import MenuDrawer from "./menu_drawer";
import Notification from "./notification";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils";

export default async function SiteHeader() {
    const session = await getServerSession(authOptions);

    return (
        <header className={` flex flex-col  sticky border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70  top-0 z-50`}>
            <div className="bg-red-500 text-center text-white p-1 ">
                WARNING: <b>This website is currently under development</b> [ Content will be updated soon—stay tuned! ]
            </div>
            <nav className="py-4 container flex justify-between items-center space-x-4 px-2 xl:px- mx-auto">
                <Link href={'/'} className="-mt-2">
                    <Image alt="logo" width={125} height={50} src={'/images/renaday_green.png'} />
                </Link>
                <MenuDrawer session={session} />
                <div className="hidden lg:flex flex-1 justify-between items-center">
                    <NavigationBar session={session} />
                    <div className="flex space-x-2 items-center">
                        <div className="flex space-x-2 rounded-sm bg-white">
                            <div className="flex items-center   rounded-full ">
                                <SearchIcon className="h-6 flex -mr-6 p-1 text-black z-10" />
                                <Input className="rounded-sm border-none bg-gray-50 outline-none pl-8" />
                            </div>
                            <Select defaultValue="jobs">
                                <SelectTrigger className="w-fit text-foreground rounded-sm ">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="jobs">Jobs</SelectItem>
                                        <SelectItem value="talents">Talents</SelectItem>
                                        <SelectItem value="projects">Projects</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <WalletButton />
                        <Notification />
                        <AccountOptions session={session} />


                    </div>
                </div>
            </nav>
        </header>);
}