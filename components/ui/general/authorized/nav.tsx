import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/ListItem";
export default function AuthorizedNav() {
    return (<NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    Find Jobs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-5">
                            <NavigationMenuLink asChild>
                                <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        DISCOVERY
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Start exploring project jobs that match your profile
                                    </p>
                                </a>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs/installation" title="JOBS">
                            Team members have a very clear history, you can choose an expert to be responsible for mentoring & supervising
                        </ListItem>
                        <ListItem href="/docs/installation" title="PROJECTS">
                            Calculating team salaries is very tiring, Renaday has a time tracker with hourly rates, you no longer need to calculate, you just need to fill your smart contract with stablecoin, and renaday will distribute it
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="PROPOSALS & OFFERS">
                            You can document who can contribute well to the team with blockchain
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="SAVED">
                            Publish projects / job openings at your place
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    Your Contracts
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-4">
                            <NavigationMenuLink asChild>
                                <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                        DIRECTORY
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Find jobs and ongoing work
                                    </p>
                                </a>
                            </NavigationMenuLink>
                        </li>
                        <ListItem href="/rx/my/direct-contract" title="DIRECT CONTRACTS">
                            If you are new, then look for someone within the ecosystem to support you in your work
                        </ListItem>
                        <ListItem href="/docs/installation" title="JOBS">
                            Your work history is well documented, so you are truly an outstanding person
                        </ListItem>
                        <ListItem href="/docs/installation" title="PROJECTS">
                            You can transfer tokenized work contracts to other parties when you have too large a workload
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Get Started">
                            Start looking for projects and jobs that suit you
                        </ListItem>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>


    </NavigationMenu>);
}