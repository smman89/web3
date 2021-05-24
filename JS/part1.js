const Web3 = require('web3')

// web3.setProvider('ws://localhost:8546')
// web3.eth.getAccounts().then(console.log)
// let url = 'wss://mainnet.infura.io/ws/v3/dc57d52f624e450994d7d60261cea2e6'

// let web3 = new Web3(url)
// console.log(web3)
// let address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
// web3.eth.getBalance(address, (err, bal) => {
//console.log(web3.utils.fromWei(bal, 'ether'))
//})
//let wallet = web3.eth.accounts.create()

//console.log(wallet)

let web3 = new Web3('http://127.0.0.1:7545')

web3.eth.getBalance('0x86337F944A800FA66fC5682a471CDB9bE1C973c0', (err, wei) => {
  let balance = web3.utils.fromWei(wei, 'ether')
  console.log(balance)
})
