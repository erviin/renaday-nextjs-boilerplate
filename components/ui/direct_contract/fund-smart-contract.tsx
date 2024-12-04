import { DirectContract } from "@prisma/client";
import React, { useState } from "react";
import { Button } from "../button";
import { Session } from "next-auth";
import { toast } from "@/hooks/use-toast";
import { Loader2, LucideBadgeDollarSign } from "lucide-react";
import { web3 } from "../general/connect_wallet";
import { contractAddress, getContract, getCurrencyContract } from "@/lib/web3";
import { Numbers } from "web3";


export const web2FundRecord = async (contractId: string, currentFund: number) => {
    try {
        const response = await fetch('/rx/api/direct-contract/actions/on-chain-fund', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contractId: contractId,
                onChainFund: currentFund
            }),
        })

        const jsonResponse = await response.json();

        if (!response.ok) {
            throw new Error(jsonResponse.error)
        }

        return jsonResponse.data;

    } catch (error: unknown) {
        console.log("Error", error)
        return false
    }

}

export default function DirectContractFundContractButton({ walletAccount, listItem, setListItem, session }:
    { walletAccount: string, listItem: DirectContract, setListItem: React.Dispatch<React.SetStateAction<DirectContract>>, session: Session | null }) {
    const [loading, setLoading] = useState(false);
    const [stateText, setStateText] = useState('Loading...');



    const createContractOnChain = async () => {
        if (web3 !== null) {
            try {
                setLoading(true);
                const providersAccounts = await web3.eth.getAccounts();
                setStateText("Request Allowance..")
                const smartContract = getContract(web3)
                const currencyContract = getCurrencyContract(web3);
                const amount = web3.utils.toWei('5', 'ether'); // Misalnya, 100 token
                await currencyContract.methods.approve(contractAddress, amount).send({
                    from: providersAccounts[0]
                });

                setStateText("Allowance done, fund the contract..");


                await smartContract.methods.fundContract(
                    session?.user?.id,
                    listItem.id,
                    amount
                ).send({
                    from: providersAccounts[0],
                })

                setStateText("Fund has sent, updating..");


                const totalFund: Numbers = await smartContract.methods.getProjectTotalFund(
                    session?.user?.id,
                    listItem.id,
                ).call();


                console.log(`Total Fund: ${web3.utils.fromWei(totalFund, 'ether')} ETH`);

                const web2RecordResult = await web2FundRecord(listItem.id, parseFloat(web3.utils.fromWei(totalFund, 'ether')));
                if (!web2RecordResult) {
                    throw new Error("Web2 Error")
                }
                setListItem(web2RecordResult);
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
                setStateText("Loading..")
            }
        }
    };

    return (
        <Button onClick={createContractOnChain} variant="outline" disabled={!(walletAccount.length > 1 && listItem.isOnChain) || loading} className="hover:bg-green-500 hover:text-white">
            {loading ? <Loader2 className="animate-spin" /> : <LucideBadgeDollarSign />}
            {loading ? <small>{stateText}</small> : 'FUND SMART CONTRACT'}

        </Button>
    );
}