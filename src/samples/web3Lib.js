import tokenAbi from './tokenAbi.json';
import crowdsaleAbi from './crawdsaleAbi.json';

const Eth = require('ethjs-query');
const EthContract = require('ethjs-contract');
const eth = new Eth(web3.currentProvider); // eslint-disable-line
const ethContract = new EthContract(eth);

const sbiCrowdsaleAddress = '0xE01bA6C593003B0EdcD43b7839a7c36b00a44dfC';
const sbiTokenAddress = '0xf47fcf487177a1f39c4c4f26da5cf762d02bf2ca';
// const owner = '0x16aae36a90c1dbd8dff29b7c4754eaf32229e148';
// var eth;

export const getAccount = async () => {
  console.log('getAccount');
  if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log('Web3 getAccount detected!');
    web3 = new Web3(web3.currentProvider); // eslint-disable-line no-undef
    return web3.eth.defaultAccount; // eslint-disable-line no-undef
  } else {
    console.log('Web3 getAccount not detected!');
    return null;
  }
};

export const getBalance = async (defaultAcc) => {
  if (!defaultAcc) {
    return null;
  }
  const sbiTokenContract = web3.eth.contract(tokenAbi).at(sbiTokenAddress); // eslint-disable-line no-undef
  const data = await sbiTokenContract.balanceOf(defaultAcc);
  console.log('getBalance', data);
  return data['c'][0];
};

/* async function waitForTxToBeMined (txHash) {
  let txReceipt;
  while (!txReceipt) {
    try {
      txReceipt = await eth.getTransactionReceipt(txHash);
      console.log(txReceipt);
    } catch (err) {
      return err;
    }
  }
} */

export const safeWithdraw = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    // web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const SbiCrowdsaleContract = ethContract(crowdsaleAbi);
  const sbiCrowdsaleContract = SbiCrowdsaleContract.at(sbiCrowdsaleAddress);
  // Call a function of the contract:
  const gasLimit = 3000000;
  const gasPrice = 50000000000;
  const result = await sbiCrowdsaleContract.safeWithdrawal({ from: definedWeb3, gasLimit: gasLimit, gasPrice: gasPrice });
  return result;
};

export const getSBIRate = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    // web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const sbiCrowdsaleContract = web3.eth.contract(crowdsaleAbi).at(sbiCrowdsaleAddress); // eslint-disable-line no-undef
  const icoTokenRate = await sbiCrowdsaleContract.tokensPerEth.call();
  const preicoTokenRate = 27314; // await sbiCrowdsaleContract.preicoTokensPerEth.call();
  return { icoTokenRate: icoTokenRate['c'][0], preicoTokenRate };
};

export const getStarted = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    // web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const sbiCrowdsaleContract = web3.eth.contract(crowdsaleAbi).at(sbiCrowdsaleAddress); // eslint-disable-line no-undef
  const data = await sbiCrowdsaleContract.isICOActive();
  return data;
};

export const getFundsBalance = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    // web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const data = await web3.eth.getBalance(sbiCrowdsaleAddress); // eslint-disable-line
  const balance = data && data['c'] ? data['c'][0] : 0;
  return balance;
};

export default {
  getAccount,
  getBalance,
  getSBIRate,
  getStarted,
  getFundsBalance,
  safeWithdraw
};
