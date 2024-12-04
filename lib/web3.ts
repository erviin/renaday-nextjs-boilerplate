
import Web3 from 'web3';
import { contractABI, erc20ABI } from './abi';



// ON ANVIL
// export const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
// export const currencyContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// ON LISK SEPOLIA
export const contractAddress = "0xBEd24D0d64d0f97194B79CC3d9B91A97320ce10E";
export const currencyContractAddress = "0x2C2Fa728700D8a98bB21c69F40c6e28F3e7231EF";

export const currencyDecimals = 18;

export const getContract = (web3: Web3) => {

    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

    if (!contractInstance) {
        throw new Error('Contract is not initialized. Call initWeb3 first.');
    }
    return contractInstance;
};


export const getCurrencyContract = (web3: Web3) => {

    const contractInstance = new web3.eth.Contract(erc20ABI, currencyContractAddress);

    if (!contractInstance) {
        throw new Error('Contract is not initialized. Call initWeb3 first.');
    }
    return contractInstance;
};

