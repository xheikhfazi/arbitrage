require('dotenv').config();
const Web3 = require('web3');
const abis = require('./abis');
const { mainnet: addresses } = require('./addresses');

const web3 = new Web3(
  new Web3.providers.WebsocketProvider(process.env.WSS_URL)
);

const amountInDai = web3.utils.toBN(web3.utils.toWei('1'));
console.log(amountInDai);
  const PancakeSwap = new web3.eth.Contract(
  abis.pancakeSwap.router,
  addresses.pancakeSwap.router
);

const BakerySwap = new web3.eth.Contract(
  abis.bakerySwap.router,
  addresses.bakerySwap.router
);

const init = async () => {
  const networkId = await web3.eth.net.getId();

  web3.eth.subscribe('newBlockHeaders')
  .on('data', async block => {
    console.log(`New block received. Block # ${block.number}`);

    const amountsOut1 = await PancakeSwap.methods.getAmountsOut(amountInDai,[addresses.tokens.WBNB, addresses.tokens.DAI] ).call(); //dai to wbnb 
    const amountsOut2 = await PancakeSwap.methods.getAmountsOut(amountsOut1[1], [addresses.tokens.DAI, addresses.tokens.WBNB]).call();
    const amountsOut3 = await BakerySwap.methods.getAmountsOut(amountInDai, [addresses.tokens.DAI, addresses.tokens.WBNB]).call();    // dai to Wbnb baketswap
    const amountsOut4 = await PancakeSwap.methods.getAmountsOut(amountsOut3[1], [addresses.tokens.WBNB, addresses.tokens.DAI]).call();   // Wbnb to dai pancakeswap

    // let fg =amountsOut1/1e18;
    // console.log(`PancakeSwap >>>>>>>>>>>> BUY :` + fg +`  SELL: ` +amountsOut2 );
    console.log(`BakerySwap -> PancakeSwap. Dai input / output: ${web3.utils.fromWei(amountInDai.toString())} / ${web3.utils.fromWei(amountsOut3[1].toString())}`);


  })
  .on('error', error => {
    console.log(error);
  });

}
init();

