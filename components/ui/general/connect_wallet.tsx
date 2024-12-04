'use client'
import { RefObject, useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { Loader2, Wallet } from "lucide-react";
import Web3 from "web3";
import { chainIds, shortenAddress } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useWalletAccountStore } from "@/hooks/stores/wallet";
import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider; // Use specific types if available
    }
}
export let web3: Web3 | null = null;
export let walletButtonRef: RefObject<HTMLButtonElement> | null = null;

export const checkWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum)
        const account = await web3.eth.getAccounts();
        return account[0]
    }
    return null
}

export const chainCheck = async () => {
    const web3 = new Web3(window.ethereum)
    const chainId = await web3.eth.getChainId()
    if (chainId.toString() !== chainIds['testNetID']) {
        return `We are sorry, Currently service only available in ${chainIds['testNet']}`
    }
    return null
}

export function WalletButton() {
    const [loading, setLoading] = useState(true);
    const { walletAccount, setWalletAccount } = useWalletAccountStore()
    const { toast } = useToast();
    walletButtonRef = useRef<HTMLButtonElement>(null);
    const checkNetwork = async () => {
        const networkMsg = await chainCheck();
        if (networkMsg) {
            toast({
                title: "Error",
                description: networkMsg,
                variant: "destructive"
            })
        }
    }

    const walletChecking = async () => {
        checkWallet().then((account) => {
            setWalletAccount(account ?? '')


            if (account && loading) {
                checkNetwork();
            }
            setLoading(false)

        })
    }

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            setLoading(true)
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            walletChecking()
        }
    }

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum?.on('networkChanged', function () {
                console.log("networkChanged")
                checkNetwork();
            });
            window.ethereum?.on('accountsChanged', function () {
                setLoading(true)

                if (loading) {
                    walletChecking()
                }

            });
        }
        walletChecking()
    }, []);


    return walletAccount.length > 0 ? (
        <div className="border p-2 my-4 lg:my-0 text-sm rounded-sm bg-green-600 text-white flex items-center">
            <Wallet className="mr-2 h-4 w-4" /> <span className="text-sm font-semibold">{shortenAddress(walletAccount)}</span>
        </div>) : (<Button ref={walletButtonRef} variant={'ghost'} onClick={connectWallet} disabled={loading} className="w-full lg:w-fit my-4 lg:my-0 justify-start lg:justify-center">
            {loading ? <Loader2 className="animate-spin" /> : <Wallet className="mr-2 h-4 w-4" />}
            {loading ? 'Loading..' : 'Connect Wallet'}
        </Button>)
        ;
}