export declare type IRouterMethodName = 'WETH' | 'addLiquidity' | 'addLiquidityETH' | 'factory' | 'getAmountIn' | 'getAmountOut' | 'getAmountsIn' | 'getAmountsOut' | 'quote' | 'removeLiquidity' | 'removeLiquidityETH' | 'removeLiquidityETHSupportingFeeOnTransferTokens' | 'removeLiquidityETHWithPermit' | 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens' | 'removeLiquidityWithPermit' | 'swapETHForExactTokens' | 'swapExactETHForTokens' | 'swapExactETHForTokensSupportingFeeOnTransferTokens' | 'swapExactTokensForETH' | 'swapExactTokensForETHSupportingFeeOnTransferTokens' | 'swapExactTokensForTokens' | 'swapExactTokensForTokensSupportingFeeOnTransferTokens' | 'swapTokensForExactETH' | 'swapTokensForExactTokens';
export declare type IRouterMethods = {
    [key in IRouterMethodName]: string;
};
export declare const DEFAULT_ROUTER_METHOD: IRouterMethods;
