import { ethers } from "ethers";
import { removeEthFromContractAddress } from "../tokens/eth";
export function isSameAddress(address1, address2) {
    return (ethers.utils.isAddress(removeEthFromContractAddress(address1)) &&
        ethers.utils.isAddress(removeEthFromContractAddress(address2)) &&
        address1.toLowerCase() === address2.toLowerCase());
}
