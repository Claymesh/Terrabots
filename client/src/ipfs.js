import { create } from 'ipfs-http-client';
// use infuria IPFS node to instantie this IPFS instance
const ipfs = create('https://ipfs.infura.io:5001/api/v0')

export default ipfs;