// Importando as dependencias

const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')


//Define a rede
// Sendo testnet a rede de teste
// e a bitcoin sendo a rede principal - mainnet
const network = bitcoin.networks.testnet


//derivação de endereços de carteiras HD (hierarchical deterministic)
//Abaixo, se alterar para `m/49'/0'/0'/0` declara-se a mainnet, ou seja, a rede principal do bitcoin. Deixando conforma abaixo, fica sendo a testnet
const path = `m/49'/1'/0'/0` 

//Criando as palavras minemonicas para a seed (palavras da senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz dda carteira HD
let root = bip32.fromSeed(seed, network)


//criando uma conta - par pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

//Gerar o endereço
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira Gerada")
console.log('Endereço: ', btcAddress)
console.log("Chave privada: ", node.toWIF())  //WIF significa Wallet import format, que serve para importar para um gerenciador externo
console.log("Seed: ", mnemonic)

