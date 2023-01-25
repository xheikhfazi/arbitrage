const axios = require('axios');
const API_URL = 'https://open-api.openocean.finance/v3/arbitrum/quote';
const inTokenAddress = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';
const outTokenAddress = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8';
const amount = 1;
let gasPrice;
const slippage = 1;

setInterval(() => {
    let outAmount;
    axios.get('https://open-api.openocean.finance/v1/42161/getGasPrice')
    .then(response => {
        const { data } = response.data;
        gasPrice = data;
        let gp=gasPrice.gasPrice;

        console.log(gp);
        axios.get(`${API_URL}?inTokenAddress=${inTokenAddress}&outTokenAddress=${outTokenAddress}&amount=${amount}&gasPrice=${gp}&slippage=${slippage}`)
        .then(response => {
            const { data } = response.data;
            outAmount = data.outAmount;
            let outToken = data.outToken;
            outAmount = outAmount/1e6;
            console.log("_______________ OPEN OCEAN __________________");
            console.log(`Price: ${outAmount}` + ` ${outToken.symbol}`);
        })
        .catch(error => {
            console.error(error);
        });
    })
    .catch(error => {
        console.error(error);
    });
}, 5000);
