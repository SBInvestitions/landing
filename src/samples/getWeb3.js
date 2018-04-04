import Web3 from 'web3';
import ABI from './abi';
// import Accounts from 'web3-eth-accounts';

let web3;

if (typeof web3 !== 'undefined') {
  console.log('Web3 detected!');
  web3 = new Web3(web3.currentProvider);
} else {
  console.log('Web3 not detected!');
  // set the provider
  web3 = new Web3('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ'); // http://178.19.249.133:8545/
  // web3 = new Web3('https://178.19.249.133:8545');
}
// const BigNumber = web3.BigNumber;
const sbiAddress = '0xf47fcf487177a1f39c4c4f26da5cf762d02bf2ca';
const SbiToken = new web3.eth.Contract(ABI, sbiAddress);

export const getBalance = async () => {
  const balance = await web3.eth.call({to: sbiAddress, data: SbiToken.methods.balanceOf('0x5acdaef4fa410f38bc26003d0f441d99bb19265a').encodeABI()}); // await SbiToken.methods.balanceOf('0x18ae8A771e006110a97581Da01052026cC9bB8c2');
  return parseInt(balance / Math.pow(10, 18));
};

export const getStarted = async () => {
  return false;
};

export default {
  getBalance,
  getStarted
};
