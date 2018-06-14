import tokenAbi from './tokenAbi.json';
import crowdsaleAbi from './crawdsaleAbi.json';

const sbiCrowdsaleAddress = '0xE01bA6C593003B0EdcD43b7839a7c36b00a44dfC';
const sbiTokenAddress = '0xf47fcf487177a1f39c4c4f26da5cf762d02bf2ca';

export const getAccount = async () => {
  if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log('Web3 getAccount detected!');
    web3 = new Web3(web3.currentProvider); // eslint-disable-line no-undef
    return web3.eth.defaultAccount; // eslint-disable-line no-undef
  } else {
    return null;
  }
};

export const getBalance = async (defaultAcc) => {
  if (!defaultAcc) {
    return null;
  }
  const sbiTokenContract = web3.eth.contract(tokenAbi).at(sbiTokenAddress); // eslint-disable-line no-undef
  const data = await sbiTokenContract.balanceOf(defaultAcc);
  return data['c'][0];
};

export const getSBIRate = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
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
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const sbiCrowdsaleContract = web3.eth.contract(crowdsaleAbi).at(sbiCrowdsaleAddress); // eslint-disable-line no-undef
  return (await sbiCrowdsaleContract.isICOActive());
};

export const getFundsBalance = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const data = await web3.eth.getBalance(sbiCrowdsaleAddress);
  return data['c'][0];
};



export default {
  getAccount,
  getBalance,
  getSBIRate,
  getStarted,
  getFundsBalance
};
