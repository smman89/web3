let Web3 = require('web3')
let web3 = new Web3('wss://mainnet.infura.io/ws/v3/dc57d52f624e450994d7d60261cea2e6')
let EthereumTx = require('ethereumjs-tx').Transaction

const account1 = '0x6780F1CED627D8Ce1eEa117E4425C887334697a1'
const privateKey1 = Buffer.from('1b3edbdc08450eec587bfd3176f4e1bcb2c3f01f49f8004c7c37ed1cb16c1fd1', 'hex')

web3.eth.getBalance(account1, (err, data) => {
  console.log(data)
})

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Smart contract data
//   const data = web3.utils.toHex('Hell')

//   //Create transaction object
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(1000000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('16', 'gwei')),
//     data: data,
//   }

//   //Sign the transaction
//   const tx = new EthereumTx(txObject)
//   tx.sign(privateKey1)
//   const serializedTx = tx.serialize()
//   const raw = '0x' + serializedTx.toString('hex')

//   //Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err:', err, ' txHash: ', txHash)
//   })
// })
