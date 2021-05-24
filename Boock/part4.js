let Web3 = require('web3')
let web3 = new Web3('wss://mainnet.infura.io/ws/v3/dc57d52f624e450994d7d60261cea2e6')
let axios = require('axios')
console.log(web3)

// web3.eth.getBlock(48, (err, result) => {
//   console.log(result)
// })

// web3.eth.getGasPrice((err, result) => {
//   console.log(result)
// })

// let contractAbi = new web3.eth.Contract()

// console.log(contractAbi)

//let abi = require()
// let contractAddress = '0x2761BF0061785EF7E286F68AA4C10518fdEa7481'

// // var Web3 = require('web3');
// // var web3 = new Web3(new Web3.providers.HttpProvider());
// // // var version = web3.version.api;

axios
  .get(
    'https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=X5YCQSTEXMB6RJTNBDE8XX6ZAZ5QRSZT1S'
  )
  .then(({ data }) => {
    let abi = ''
    abi = JSON.parse(data.result)

    //console.log(abi)
    let contract = web3.eth.contract(abi)
    console.log(
      contract.methods.curator().call((err, result) => {
        console.log(err)
        console.log(result)
      })
    )
  })
