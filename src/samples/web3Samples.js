$(document).ready(function() {
  window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    //var web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.100.134:8545/"));
    //web3.eth.accounts[ '0x9eEFBdF45d50ea1688540A613e5e09b7bd11896C'];
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      console.log("Web3 detected!");
      window.web3 = new Web3(web3.currentProvider);
      // Now you can start your app & access web3 freely:
      startApp();
    } else {
      console.log("Web3 not detected!");
    }
  });


  function getBalance(walletAddress) {
    // var addressOfContract = "0xf2bd69b748712531c7deb34ecc4ea935d2cc845f"; // Ropsten
    var addressOfContract = ""; // main
    var contract = web3.eth.contract(abi).at(addressOfContract);
    console.log("Contract initialized successfully", contract);
    // Get eth amount
    contract.balanceOfETH(walletAddress, function (error, data) {
      console.log('balanceOfETH = ', balanceOfETH / 10000, 'ETH');
      balanceOfETH = data["c"][0];
      var ethAmount = '<div class="result">' +
        '<h3> У вас на счету: <span>' + (balanceOfETH / 10000) + ' ETH</span></h3>' +
        '</div>';
      ethContainer.empty();
      ethContainer.html(ethAmount);

      contract.balanceOfFeatureTokens(walletAddress, function(error, data) {
        balanceOfFeatureTokens = data["c"][0];
        console.log(balanceOfFeatureTokens / 10000, 'TKLX', data);
        var balanceContainer = ethContainer.find('h3 span');
        var balance = balanceOfETH;
        setTimeout(function(){
          balanceContainer.empty();
          balanceContainer.html((balanceOfFeatureTokens / 1000) + ' TKLX');
          setTimeout(function(){
            errorCatch('<h3>Проверьте другой кошелек!</h3>');
          }, 3000);
        }, 1000);
      });
    });
  }

  function getTKLXBalance(walletAddress) {
    // Get feature tokens amount
    contract.balanceOf(walletAddress, function(error, data) {
      balanceOfFeatureTokens = data["c"][0];
      console.log(balanceOfFeatureTokens / 10000, 'TKLX', data);
    });
  }
});