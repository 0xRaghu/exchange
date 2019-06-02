require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKeys = process.env.PRIVATE_KEYS || "";
const apiKey = process.env.INFURA_API_KEY;
const rinkebyApiKey = process.env.RINKEBY_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          //Private Key
          privateKeys.split(","),
          apiKey
          //url to a node
        );
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          //Private Key
          privateKeys.split(","),
          rinkebyApiKey
          //url to a node
        );
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    }
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
