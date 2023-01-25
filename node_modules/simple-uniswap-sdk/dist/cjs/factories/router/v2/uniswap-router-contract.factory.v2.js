"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapRouterContractFactoryV2 = void 0;
var uniswap_contract_context_v2_1 = require("../../../uniswap-contract-context/uniswap-contract-context-v2");
var route_methods_1 = require("../models/route-methods");
var UniswapRouterContractFactoryV2 = /** @class */ (function () {
    function UniswapRouterContractFactoryV2(_ethersProvider, _routerAddress, _routerAbi, _routerMethods) {
        if (_routerAddress === void 0) { _routerAddress = uniswap_contract_context_v2_1.UniswapContractContextV2.routerAddress; }
        if (_routerAbi === void 0) { _routerAbi = uniswap_contract_context_v2_1.UniswapContractContextV2.routerAbi; }
        if (_routerMethods === void 0) { _routerMethods = route_methods_1.DEFAULT_ROUTER_METHOD; }
        this._ethersProvider = _ethersProvider;
        this._routerAddress = _routerAddress;
        this._routerAbi = _routerAbi;
        this._routerMethods = _routerMethods;
        this._uniswapRouterContract = this._ethersProvider.getContract(JSON.stringify(this._routerAbi), this._routerAddress);
        this._uniswapRouterNames = __assign(__assign({}, route_methods_1.DEFAULT_ROUTER_METHOD), this._routerMethods);
    }
    UniswapRouterContractFactoryV2.prototype.addLiquidity = function (tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['addLiquidity'], [
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline,
        ]);
    };
    UniswapRouterContractFactoryV2.prototype.addLiquidityETH = function (token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['addLiquidityETH'], [token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.factory = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._uniswapRouterContract.factory()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UniswapRouterContractFactoryV2.prototype.getAmountsOut = function (amountIn, path) {
        return __awaiter(this, void 0, void 0, function () {
            var amounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._uniswapRouterContract.getAmountsOut(amountIn, path)];
                    case 1:
                        amounts = _a.sent();
                        return [2 /*return*/, amounts.map(function (c) { return c.toHexString(); })];
                }
            });
        });
    };
    UniswapRouterContractFactoryV2.prototype.quote = function (amountA, reserveA, reserveB) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._uniswapRouterContract.quote(amountA, reserveA, reserveB)];
                    case 1: return [2 /*return*/, (_a.sent()).toHexString()];
                }
            });
        });
    };
    UniswapRouterContractFactoryV2.prototype.removeLiquidity = function (tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['removeLiquidity'], [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.removeLiquidityETH = function (token, liquidity, amountTokenMin, amountETHMin, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['removeLiquidity'], [token, liquidity, amountTokenMin, amountETHMin, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.removeLiquidityETHSupportingFeeOnTransferTokens = function (token, liquidity, amountTokenMin, amountETHMin, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['removeLiquidityETHSupportingFeeOnTransferTokens'], [token, liquidity, amountTokenMin, amountETHMin, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.removeLiquidityETHWithPermit = function (token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['removeLiquidityETHWithPermit'], [
            token,
            liquidity,
            amountTokenMin,
            amountETHMin,
            to,
            deadline,
            approveMax,
            v,
            r,
            s,
        ]);
    };
    UniswapRouterContractFactoryV2.prototype.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = function (token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'], [
            token,
            liquidity,
            amountTokenMin,
            amountETHMin,
            to,
            deadline,
            approveMax,
            v,
            r,
            s,
        ]);
    };
    UniswapRouterContractFactoryV2.prototype.removeLiquidityWithPermit = function (tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline, approveMax, v, r, s) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['removeLiquidityWithPermit'], [
            tokenA,
            tokenB,
            liquidity,
            amountAMin,
            amountBMin,
            to,
            deadline,
            approveMax,
            v,
            r,
            s,
        ]);
    };
    UniswapRouterContractFactoryV2.prototype.swapExactETHForTokens = function (amountOutMin, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapExactETHForTokens'], [amountOutMin, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapETHForExactTokens = function (amountOut, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapETHForExactTokens'], [amountOut, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapExactETHForTokensSupportingFeeOnTransferTokens = function (amountIn, amountOutMin, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapExactETHForTokensSupportingFeeOnTransferTokens'], [amountIn, amountOutMin, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapExactTokensForETH = function (amountIn, amountOutMin, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapExactTokensForETH'], [amountIn, amountOutMin, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapTokensForExactETH = function (amountOut, amountInMax, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapTokensForExactETH'], [amountOut, amountInMax, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapExactTokensForETHSupportingFeeOnTransferTokens = function (amountIn, amountOutMin, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapExactTokensForETHSupportingFeeOnTransferTokens'], [amountIn, amountOutMin, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapExactTokensForTokens = function (amountIn, amountOutMin, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapExactTokensForTokens'], [amountIn, amountOutMin, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapTokensForExactTokens = function (amountOut, amountInMax, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapTokensForExactTokens'], [amountOut, amountInMax, path, to, deadline]);
    };
    UniswapRouterContractFactoryV2.prototype.swapExactTokensForTokensSupportingFeeOnTransferTokens = function (amountIn, amountOutMin, path, to, deadline) {
        return this._uniswapRouterContract.interface.encodeFunctionData(this._uniswapRouterNames['swapExactTokensForTokensSupportingFeeOnTransferTokens'], [amountIn, amountOutMin, path, to, deadline]);
    };
    return UniswapRouterContractFactoryV2;
}());
exports.UniswapRouterContractFactoryV2 = UniswapRouterContractFactoryV2;
