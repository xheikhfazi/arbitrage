import { CloneUniswapContractDetails } from '../factories/pair/models/clone-uniswap-contract-details';
export declare const uniswapContracts: {
    v2: {
        getRouterAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getFactoryAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getPairAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getRouterAbi: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => import("@ethersproject/abi").JsonFragment[];
        getRouterMethods: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => Partial<import("../factories/router/models/route-methods").IRouterMethods>;
    };
    v3: {
        getRouterAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getFactoryAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getQuoterAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getRouterAbi: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => import("@ethersproject/abi").JsonFragment[];
    };
};
