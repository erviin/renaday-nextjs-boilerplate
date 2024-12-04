import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Skeleton } from "../skeleton";
import { useWalletAccountStore } from "@/hooks/stores/wallet";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Badge } from "../badge";
import { Separator } from "../separator";
import { Session } from "next-auth";
import { DirectContract, User } from "@prisma/client";
import { useState } from "react";
import AcceptDirectContractButton from "../direct_contract/accept_button";
import RejectDirectContractButton from "../direct_contract/reject_button";
import DirectContractDeployOnChainButton from "../direct_contract/deploy_on_chain";
import DirectContractFundContractButton from "../direct_contract/fund-smart-contract";
import RefreshOnChainFund from "../direct_contract/refresh_fund";

export default function ContractListItem({ item, session }: {
    item: DirectContract & {
        employerEmailData?: User | null;
        employeeEmailData?: User | null;
        ownerEmailData?: User | null;
    }, session: Session | null
}) {

    const { walletAccount } = useWalletAccountStore()

    const [listItem, setListItem] = useState(item)

    if (listItem.isEnded) {
        return (<></>);
    }

    return (<Card className="my-8 relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-lg md:text-xl font-bold">{listItem.projectName}</CardTitle>
            <div className="flex items-center gap-2">
                <Button variant="outline" className="md:block hidden font-medium">
                    Timesheet
                </Button>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild className="md:hidden">
                        <Button variant={"outline"} className="-top-4 -right-1 md:right-0 md:top-0 absolute md:relative md:mt-0 rounded-full h-10 w-10 text-black font-semibold">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white shadow-sm border p-2 rounded-md mt-2">
                        <DropdownMenuItem className="outline-none">
                            <Button className="px-4 py-2 w-full" variant={"ghost"}>Timesheet</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">
                            <Button className="px-4 py-2 w-full" variant={"ghost"}>End Contract</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">
                            <Button className="px-4 py-2 w-full" variant="ghost" disabled={walletAccount.length < 1 && listItem.isAccepted && (listItem.onChainTx?.length ?? 0) == 0}>DEPLOY SMART CONTRACT</Button>
                        </DropdownMenuItem>
                        {session?.user?.email === listItem.employerEmail ?
                            <DropdownMenuItem className="outline-none">
                                <Button className="px-4 py-2 w-full" variant="ghost" disabled={walletAccount.length < 1}>FUND SMART CONTRACT</Button>
                            </DropdownMenuItem> : <></>}
                        <DropdownMenuItem className="outline-none">
                            <Button className="px-4 py-2 w-full" variant="ghost" disabled={walletAccount.length < 1}>TOKENIZED</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">
                            <Button className="px-4 py-2 w-full" variant={"ghost"}>Add Terms</Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="outline-none">
                            <Button className="px-4 py-2 w-full" variant={"ghost"}>Messages</Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardHeader>
        <CardContent className=" space-y-4 md:space-y-6">
            <div className="grid gap-2 md:gap-4 md:grid-cols-2">
                <div className="space-y-2 md:space-y-4">
                    <div>
                        <h3 className="text-xs md:text-md font-medium text-muted-foreground">
                            {listItem.employerEmail === session?.user?.email ? 'Contractor' : 'Hired By'}
                        </h3>
                        <p className="text-md md:text-lg">{listItem.employerEmail === session?.user?.email ? listItem?.employeeEmailData?.name : listItem?.employerEmailData?.name}</p>
                        <p className=" text-xs md:text-sm text-muted-foreground">Renaday Digital</p>
                    </div>
                    <div>
                        <h3 className="text-xs md:text-md font-medium text-muted-foreground">Period</h3>
                        <p className="text-sm md:text-md">Jul 1 - Present</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Badge className="rounded-md bg-green-500">Active</Badge>
                        <span className="font-medium text-sm md:text-md">{listItem.onChainCurrentFund} USDC total fund</span>
                        <RefreshOnChainFund listItem={listItem} setListItem={setListItem} session={session} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-md">Trackers</span>
                            <span className="text-sm md:text-md">0:00 hrs, This Week $0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-md">Last activity</span>
                            <span className="text-sm md:text-md">30 minutes ago</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground text-xs md:text-md">Rate</span>
                            <span className="text-sm md:text-md">23 USDC / Hour</span>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="hidden md:block" />
            <div className="hidden md:flex flex-wrap gap-4">
                <DirectContractDeployOnChainButton walletAccount={walletAccount} listItem={listItem} setListItem={setListItem} session={session} />
                <DirectContractFundContractButton walletAccount={walletAccount} listItem={listItem} setListItem={setListItem} session={session} />
                <Button variant="outline" disabled={!(walletAccount.length > 1 && listItem.isOnChain)}>TOKENIZED</Button>
                <Button variant="outline" disabled={!listItem.isAccepted}>Add Terms</Button>
                <Button variant="outline" disabled={true}>Send Message</Button>
                {session?.user?.email !== listItem.ownerEmail && !listItem.isAccepted ?
                    <div className="flex space-x-1">
                        <AcceptDirectContractButton item={listItem} setItem={setListItem} />
                        <RejectDirectContractButton item={listItem} setItem={setListItem} />

                    </div>
                    :
                    <Button>End Contract</Button>
                }
            </div>
        </CardContent>
    </Card>);

}

export function ContractListItemSkeleton() {


    return (<Card className="my-8 p-6" >
        <div className="flex justify-between">
            <Skeleton className="h-4 w-6/12" />
            <div className="hidden md:flex space-x-2 items-center">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-8 w-8 rounded-full" />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="space-y-1">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-40" />
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex space-x-2 items-center">
                    <Skeleton className="h-4 w-full" />
                </div>
                <div className="flex space-x-2 text-sm">
                    <Skeleton className="h-4 w-8/12" />
                </div>
                <div className="flex space-x-2 text-sm">
                    <Skeleton className="h-4 w-6/12" />
                </div>
                <div className="flex space-x-2 text-sm">
                    <Skeleton className="h-4 w-4/12" />
                </div>
            </div>
        </div>
        <div className="text-gray-400  text-sm font-semibold">
            <Skeleton className="h-4 w-56" />
        </div>
    </Card>);

}