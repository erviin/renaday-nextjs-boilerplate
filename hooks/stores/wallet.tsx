import Web3 from "web3";
import { create } from "zustand"

export const useWalletAccountStore = create<{
    walletAccount: string,
    setWalletAccount: Function
}>((set) => ({
    walletAccount: "",
    setWalletAccount: (value: string) => set({ walletAccount: value }),
}));

export const useWeb3Instance = create<{
    web3Instance: Web3 | null,
    setWeb3Instance: Function
}>((set) => ({
    web3Instance: null,
    setWeb3Instance: (value: Web3 | null) => set({ web3Instance: value }),
}));