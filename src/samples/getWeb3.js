import tokenAbi from './tokenAbi.json';
import crowdsaleAbi from './crawdsaleAbi.json';
/* window.addEventListener('load', function () {
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log('Web3 detected!');
    web3 = new Web3(web3.currentProvider); // eslint-disable-line no-undef
  } else {
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  // const defaultAcc = web3.eth.defaultAccount; // eslint-disable-line no-undef
  // getBalance(defaultAcc);
}); */
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
  let defaultAccount = await getAccount();
  if (!defaultAccount) {
    defaultAccount = defaultAcc;
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  /* if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log('Web3 detected!');
    web3 = new Web3(web3.currentProvider); // eslint-disable-line no-undef
    defaultAccount = web3.eth.defaultAccount; // eslint-disable-line no-undef
  } else {
    defaultAccount = defaultAcc;
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  } */
  if (!defaultAccount) {
    return null;
  }
  const sbiTokenAddress = '0xf47fcf487177a1f39c4c4f26da5cf762d02bf2ca';
  const sbiTokenContract = web3.eth.contract(tokenAbi).at(sbiTokenAddress); // eslint-disable-line no-undef
  const data = await sbiTokenContract.balanceOf(defaultAccount);
  return data['c'][0];
};

export const getSBIRate = async () => {
  const definedWeb3 = await getAccount();
  if (!definedWeb3) {
    console.log('No web3? You should consider trying MetaMask!');
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/NL7tvR7ICNOBFEhccMbJ')); // eslint-disable-line no-undef
  }
  const sbiCrowdsaleAddress = '0x693bb391F6E2cB3C9B8d6A261916C662f9c86A45';
  const sbiCrowdsaleContract = web3.eth.contract(crowdsaleAbi).at(sbiCrowdsaleAddress); // eslint-disable-line no-undef
  const data = await sbiCrowdsaleContract.tokensPerEth.call();
  return data;
};

export const getStarted = async () => {
  return false;
};

export default {
  getAccount,
  getBalance,
  getSBIRate,
  getStarted
};
