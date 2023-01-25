// import { ethers } from 'ethers'
import { ethers } from "ethers";
//convert all imports to require

// const ethers = require("ethers");
// const { Pool } = require("@uniswap/v3-sdk")
// const { CurrencyAmount, MaxUint256, Token, TradeType } = require('@uniswap/sdk-core');
// const { Route } = require("@uniswap/v3-sdk")
// const { Trade } = require("@uniswap/v3-sdk")

import { Pool } from "@uniswap/v3-sdk";
import {
  CurrencyAmount,
  MaxUint256,
  Token,
  TradeType,
} from "@uniswap/sdk-core";

import { Route } from "@uniswap/v3-sdk";
import { Trade } from "@uniswap/v3-sdk";
import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { abi as QuoterABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { servicesVersion } from "typescript";


 const Web3 = require('web3');
// const gql = require('graphql-request').gql;
// const GraphQLClient = require('graphql-request').GraphQLClient;

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
// ABI definition for the Uniswap v2 exchange contract
const uniswapExchangeABI = [
  {
    constant: true,
    inputs: [],
    name: 'pairs',
    outputs: [
      {
        name: '',
        type: 'bytes32[]',
      },
    ],
    payable: false,
    state_mutability: 'view',
    type: 'function',
  },
  // ... other ABI definitions here
];


// Address of the Uniswap v3 exchange contract on the Ethereum blockchain
const contractAddress = '0x6c28AeF8977c9B773996d0e8376d2EE379446F2f';

// Connect to the Uniswap subgraph
const subgraphUrl = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

// Use the Web3 eth object to create a contract instance
const subgraph = new web3.eth.Contract(uniswapExchangeABI, contractAddress);

// // Create a GraphQL client using the subgraph URL
// const graphqlClient = new  GraphQLClient(subgraphUrl);

const provider = new ethers.providers.JsonRpcProvider(
  "https://fragrant-practical-sunset.matic.discover.quiknode.pro/cfbc8333ffb13eb30567730f4d78e51a69a1ef5f"
);




export default async function Priceget(poolAddress,input,token0,token1): Promise<number> 
{

const quoterAddress = "0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6";


const poolContract = new ethers.Contract(poolAddress,IUniswapV3PoolABI,provider);
const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, provider);

interface Immutables {
  factory: string;
  token0: string;
  token1: string;
  fee: number;
  tickSpacing: number;
  maxLiquidityPerTick: ethers.BigNumber;
}

interface State {
  liquidity: ethers.BigNumber;
  sqrtPriceX96: ethers.BigNumber;
  tick: number;
  observationIndex: number;
  observationCardinality: number;
  observationCardinalityNext: number;
  feeProtocol: number;
  unlocked: boolean;
}

async function getPoolImmutables() {
  const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] =
    await Promise.all([
      poolContract.factory(),
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
      poolContract.tickSpacing(),
      poolContract.maxLiquidityPerTick(),
    ]);

  const immutables: Immutables = {
    factory,
    token0,
    token1,
    fee,
    tickSpacing,
    maxLiquidityPerTick,
  };
  return immutables;
}

async function getPoolState() {
  // note that data here can be desynced if the call executes over the span of two or more blocks.
  const [liquidity, slot] = await Promise.all([
    poolContract.liquidity(),
    poolContract.slot0(),
  ]);

  const PoolState: State = {
    liquidity,
    sqrtPriceX96: slot[0],
    tick: slot[1],
    observationIndex: slot[2],
    observationCardinality: slot[3],
    observationCardinalityNext: slot[4],
    feeProtocol: slot[5],
    unlocked: slot[6],
  };

  return PoolState;
}


  console.log("Inside main function...."); 
  
  // query the state and immutable variables of the pool
  const [immutables, state] = await Promise.all([ getPoolImmutables(),getPoolState(),]);

  const amountIn = 1 * (Math.pow(10, token1.decimal));

  
  const amountIn2 = 1 * (Math.pow(10, token1.decimal));



  // call the quoter contract to determine the amount out of a swap, given an amount in
  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
      immutables.token1,
      immutables.token0,
      immutables.fee,
      amountIn.toString(),
      0
    );

    const quotedAmountOut2 = await quoterContract.callStatic.quoteExactOutputSingle(
      immutables.token0,
      immutables.token1,
      immutables.fee,
      amountIn2.toString(),
      0
    );

    
  var am2 = quotedAmountOut2;
  var am = quotedAmountOut;

  
   am = am / (Math.pow(10, token0.decimal));
  
   am2 = am2 / (Math.pow(10, token0.decimal));


   console.log(">>>>>> BUY : " + am2.toString() );
  console.log(">>>>>> SELL : " + am.toString() );
  return am.toString();


}



 const USDC = {
  decimal: 6 ,
  symbol: "USDC"

};
const WETH = {
  decimal: 18,

  symbol: "WETH"
  
};
 
// USDC-WETH pool address on mainnet for fee tier 0.05%
 const pool = "0x55CAaBB0d2b704FD0eF8192A7E35D8837e678207";
 Priceget(pool,1,USDC,WETH);

 
