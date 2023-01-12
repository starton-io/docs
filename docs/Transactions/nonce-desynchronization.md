---
title: Managing desynchronized nonce 
---

const axios = require("axios")

const axiosInstance = axios.create({
baseURL: "https://api.starton.io/",
headers: {
"x-api-key": "sYOUR_API_KEY",
},
})

axiosInstance.post(
"/v3/kms/wallet/0x308f251B03efD16df1c17359e69d9DaC47a3E81b/polygon-mainnet/nonce/resync",
{

    }

).then((response) => {
console.log(response.data)
})