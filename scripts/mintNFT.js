require('dotenv').config();
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const data = require('../build/contracts/ArtCollectible.json');
const abiArray = data.abi;
const contract_address = process.env.CONTRACT_ADDRESS;
const mnemonic = process.env.MNEMONIC;
const clientURL = process.env.CLIENT_URL;
const provider = new HDWalletProvider(mnemonic, clientURL);
const web3 = new Web3(provider);

const ipfsHash = require('../data/ipfsHash.json')


async function mintNFT() {
    try {
        const accounts = await web3.eth.getAccounts();
        // console.log('accounts:', accounts);
        // console.log('contract_address', contract_address);
        const artCollectible = new web3.eth.Contract(abiArray, contract_address);
        let metaDataURL = ipfsHash[ipfsHash.length - 1]['IpfsHash'];
        let ipfsURL = 'https://ipfs.io/ipfs/' + metaDataURL;

        // console.log(ipfsURL)

        await artCollectible.methods
            .claimItem(
                ipfsURL
            )
            .send({ from: accounts[0] });
        console.log('Successfully minted NFT');
        // https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#IERC721-balanceOf-address-
        // returns number of NFT's in owner's account
        const balance = await artCollectible.methods.balanceOf(accounts[0]).call();
        const owner = await artCollectible.methods.ownerOf(balance).call();
        console.log('balance: ', balance);
        console.log('owner: ', owner);
    }
    catch (err) {
        console.log('error occured while calling deployed contract:', err);
    }
}

module.exports = mintNFT;