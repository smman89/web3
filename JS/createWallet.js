let Web3 = require('web3')
let web3 = new Web3('wss://mainnet.infura.io/ws/v3/dc57d52f624e450994d7d60261cea2e6')
let axios = require('axios')

//let wallet = web3.eth.accounts.create()
// console.log(wallet)

let balance = web3.eth.getBalance('0x6780F1CED627D8Ce1eEa117E4425C887334697a1', (err, data) => {
  console.log(err, data)
})

// let wallet = web3.eth.accounts.wallet.create(1)

console.log('balance')
