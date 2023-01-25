const axios = require('axios');

const API_URL1 = 'https://api.1inch.io/v5.0/137/quote';
const fromTokenAddress = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';
const toTokenAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';

const amount1 = '1000000000000000000';
const amount2 = '1000000';

async function Inch_QUOTE() {
  try {
    const response = await axios.get(`${API_URL1}?fromTokenAddress=${toTokenAddress}&toTokenAddress=${fromTokenAddress}&amount=${amount2}`);
    const { data } = response;
    let { toTokenAmount,  estimatedPrice } = data;

    toTokenAmount = toTokenAmount/1e18;

    console.log("_______________ 1INCH SWAP __________________");
    console.log(`BUY PRICE: ${toTokenAmount}` );

  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.get(`${API_URL1}?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount1}`);
    const { data } = response;
    let { toTokenAmount, toToken, estimatedPrice } = data;

    toTokenAmount = toTokenAmount/1e6;

    console.log(`SELL Price: ${toTokenAmount}`+` ${toToken.symbol}` );

  } catch (error) {
    console.error(error);
  }
}

// const Inch_Weth_Usdc = async () => {
//   try {
//     const response = await axios.get(`${API_URL1}?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount1}`);
//     const { data } = response;
//     let { toTokenAmount, toToken, estimatedPrice } = data;

//     toTokenAmount = toTokenAmount/1e6;

//     console.log("_______________ 1INCH SWAP __________________");
//     console.log(`Price: ${toTokenAmount}`+` ${toToken.symbol}` );

//   } catch (error) {
//     console.error(error);
//   }
// }



// const axios = require('axios');
 const axiosRateLimit = require('axios-rate-limit');

const API_URL = 'https://apiv5.paraswap.io/prices/';
const inTokenAddress = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';
const outTokenAddress = '0x2791bca1f2de4661ed88a30c99a7a9449aa84174';
const amount = 1000000000000000000;
const amount22 = 1000000;
const srcDec = 18;
const desDec = 6;
const side = 'SELL';
const side2 = 'SELL';
const netId = 137;

const rateLimitedAxios = axiosRateLimit(axios.create(), {
  maxRequests: 10,
  perMilliseconds: 60000
});

const Paraswap_WETH_USDC = async () => {


  try{
    const response = await axios.get(`${API_URL}?srcToken=${outTokenAddress}&destToken=${inTokenAddress}&amount=${amount22}&srcDecimals=${desDec}&destDecimals=${srcDec}&side=${side2}&network=${netId}`);
     
        const { data } = response;
        const { priceRoute } = data;
        let sellAmount = priceRoute.destAmount;
  
        console.log("_______________ PARA SWAP __________________");
        sellAmount = sellAmount / 1e18;
        console.log("BUY Price: " + sellAmount);
      
    } catch (error) {
          console.error(error);
    }


  try{
  const response = await axios.get(`${API_URL}?srcToken=${inTokenAddress}&destToken=${outTokenAddress}&amount=${amount}&srcDecimals=${srcDec}&destDecimals=${desDec}&side=${side}&network=${netId}`);
   
      const { data } = response;
      const { priceRoute } = data;
      let sellAmount = priceRoute.destAmount;

      sellAmount = sellAmount / 1e6;
      console.log("SELL Price: " + sellAmount);
    
  } catch (error) {
        console.error(error);
  }
}


 setInterval(Inch_QUOTE,4000);
 setInterval(Paraswap_WETH_USDC, 4000);
