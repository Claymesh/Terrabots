require('dotenv').config();
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { storeDataToFile } = require('./ipfsHelper.js');
const ipfsHash = require('../data/ipfsHash.json')
const metadata = require('../data/metadata.json')

const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const data = require('../build/contracts/ArtCollectible.json');
const abiArray = data.abi;
const contract_address = process.env.CONTRACT_ADDRESS;
const mnemonic = process.env.MNEMONIC;
const clientURL = process.env.CLIENT_URL;
const provider = new HDWalletProvider(mnemonic, clientURL);
const web3 = new Web3(provider);

// Calls Pinata API's to pin file to IPFS
const pinFileToIPFS = async (filePath, arg) => {
  const pinataEndpoint = process.env.PINATA_ENDPOINT;
  const pinataApiKey = process.env.PINATA_API_KEY;
  const pinataApiSecret = process.env.PINATA_API_SECRET;
  const form_data = new FormData();

  if (arg) {
    var pathToModule = require.resolve('../data/metadata.json');
    var imgHash = ipfsHash[ipfsHash.length - 1]['IpfsHash']
    var ipfsURL = 'https://ipfs.io/ipfs/' + imgHash

    const artCollectible = new web3.eth.Contract(abiArray, contract_address);
        var tokenID = await artCollectible.methods.totalSupply().call()

    let current = metadata;
    current.name = `Terrabot #${parseInt(tokenID) + 1}`
    // var updatedName = current.name;
    // _tokenID = tokenID + 1
    // updatedName = "Terrabot #" + _tokenID;


    // current.name = updatedName;
    current.image = ipfsURL;
    // console.log('   ___', current)
    fs.writeFileSync(pathToModule, JSON.stringify(current), 'utf8');
  };


  try {
    form_data.append('file', fs.createReadStream(filePath));
    const request = {
      method: 'post',
      url: pinataEndpoint,
      maxContentLength: 'Infinity',
      headers: {
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataApiSecret,
        'Content-Type': `multipart/form-data; boundary=${form_data._boundary}`,
      },
      data: form_data,
    };
    // console.log('request:', request);
    const response = await axios(request)
    // console.log('Successfully pinned file to IPFS : ', response);
    await storeDataToFile(response.data);
    // let reset = metadata;
    // reset.name = "Terrabots #";
    // fs.writeFileSync(pathToModule, JSON.stringify(current), 'utf8');
    console.log('Successfully added IPFS response to json file');
  } catch (err) {
    console.log('Error occurred while pinning file to IPFS: ', err);
  }
};

module.exports = pinFileToIPFS;
