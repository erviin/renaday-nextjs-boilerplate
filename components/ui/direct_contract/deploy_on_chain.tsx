import { DirectContract } from "@prisma/client";
import React, { useState } from "react";
import { Button } from "../button";
import { currencyContractAddress, currencyDecimals } from "@/lib/web3";
import { Session } from "next-auth";
import { toast } from "@/hooks/use-toast";
import { Link, Loader2 } from "lucide-react";
import { web3 } from "../general/connect_wallet";
import { getContract } from "@/lib/web3";

export default function DirectContractDeployOnChainButton({ walletAccount, listItem, setListItem, session }:
    { walletAccount: string, listItem: DirectContract, setListItem: React.Dispatch<React.SetStateAction<DirectContract>>, session: Session | null }) {
    const [loading, setLoading] = useState(false);

    const web2OnChainRecord = async (txHash: string) => {
        try {
            const response = await fetch('/rx/api/direct-contract/actions/on-chain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contractId: listItem.id,
                    transactionHash: txHash
                }),
            })

            const jsonResponse = await response.json();

            if (!response.ok) {
                throw new Error(jsonResponse.error)
            }

            return jsonResponse.data;

        } catch (error: unknown) {
            console.log("error", error)
            return false
        }

    }

    const createContractOnChain = async () => {
        if (web3 !== null) {
            try {
                setLoading(true);
                const providersAccounts = await web3.eth.getAccounts();

                const smartContract = getContract(web3)
                const receipt = await smartContract.methods.createContract(
                    session?.user?.id,
                    listItem.id,
                    currencyDecimals,
                    currencyContractAddress
                ).send({
                    from: providersAccounts[0]
                })

                // receipt.transactionHash
                // receipt.from

                const web2Record = await web2OnChainRecord(receipt.transactionHash);
                if (!web2Record) {
                    throw new Error("Web2 Error")
                }
                setListItem(web2Record);
                toast({
                    title: "Success",
                    description: `Yeaay! this contract is fully on-chain now`,
                })
            } catch (err: unknown) {
                console.log("err", err)
                toast({
                    title: "Error",
                    description: `We are sorry, Something went wrong`,
                    variant: "destructive"
                })
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <Button onClick={createContractOnChain} variant="outline" disabled={(walletAccount.length < 1 ? true : (listItem.isOnChain)) || loading}>
            {loading ? <Loader2 className="animate-spin" /> : <Link />}
            {loading ? 'Deploying..' : 'DEPLOY SMART CONTRACT'}

        </Button>
    );
}