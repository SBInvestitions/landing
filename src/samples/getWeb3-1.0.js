import Web3 from 'web3';
import tokenAbi from './tokenAbi.json';
import crowdsaleAbi from './crawdsaleAbi.json';
import Accounts from 'web3-eth-accounts';

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

const defaultAccount = web3.eth.defaultAccount;
console.log('defaultAccount', defaultAccount);

// const BigNumber = web3.BigNumber;
const sbiAddress = '0xf47fcf487177a1f39c4c4f26da5cf762d02bf2ca';
const sbiCrowdsaleAddress = '0x693bb391F6E2cB3C9B8d6A261916C662f9c86A45';
const SbiToken = new web3.eth.Contract(tokenAbi, sbiAddress);
const SbiCrowdsale = new web3.eth.Contract(crowdsaleAbi, sbiCrowdsaleAddress);
const accounts = new Accounts('ws://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ');
const wallet = web3.eth.accounts.wallet;
console.log('wallet', wallet);

web3.eth.getAccounts(accounts => console.log('accounts2', accounts));
console.log('accounts', accounts);

export const getBalance = async () => {
  const balance = await web3.eth.call({to: sbiAddress, data: SbiToken.methods.balanceOf('0x5acdaef4fa410f38bc26003d0f441d99bb19265a').encodeABI()}); // await SbiToken.methods.balanceOf('0x18ae8A771e006110a97581Da01052026cC9bB8c2');
  return parseInt(balance / Math.pow(10, 18));
};

export const getSBIRate = async () => {
  const rate = await web3.eth.call({to: sbiCrowdsaleAddress, data: SbiCrowdsale.methods.tokensPerEth.call().encodeABI()});
  return parseInt(rate);
};

export const getStarted = async () => {
  return false;
};

export default {
  getBalance,
  getSBIRate,
  getStarted
};
