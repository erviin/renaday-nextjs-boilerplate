import { Loader2, RefreshCw } from "lucide-react";
import { Button } from "../button";
import { walletButtonRef, web3 } from "../general/connect_wallet";
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getContract } from "@/lib/web3";
import { DirectContract } from "@prisma/client";
import { Session } from "next-auth";
import { web2FundRecord } from "./fund-smart-contract";
import { Numbers } from "web3";

export default function RefreshOnChainFund(
    { listItem, setListItem, session }:
        { listItem: DirectContract, setListItem: React.Dispatch<React.SetStateAction<DirectContract>>, session: Session | null }) {
    const [loading, setLoading] = useState(false)

    const refreshOnChainFund = async () => {
        const web3Accounts: string[] | undefined = await web3?.eth.getAccounts()
        if (web3 !== null) {
            setLoading(true);

            if (web3Accounts && web3Accounts.length < 1 || web3Accounts == undefined) {
                setLoading(false);
                toast({
                    title: "Warning",
                    description: "Wallet is not connected, try again later",
                })
                walletButtonRef?.current?.click();
            } else {
                const smartContract = getContract(web3)
                const totalFund: Numbers = await smartContract.methods.getProjectTotalFund(session?.user.id, listItem.id).call()
                const number = web3.utils.fromWei(totalFund, 'ether')

                const web2RecordResult = await web2FundRecord(listItem.id, parseFloat(number));
                if (!web2RecordResult) {
                    throw new Error("Web2 Error")
                }
                setListItem(web2RecordResult);
                toast({
                    description: "Current fund is updated",
                })
                setLoading(false);
            }
        }

    }

    return (<Button onClick={refreshOnChainFund} className="p-1 rounded-full h-fit" variant={"ghost"}>
        {loading ? <Loader2 className="animate-spin" /> : <RefreshCw />}
    </Button>);

}