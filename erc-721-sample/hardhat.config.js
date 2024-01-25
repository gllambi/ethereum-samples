require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai : {
      url: process.env.PROVIDER_URL,
      accounts: ['0x'+process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
      apiKey: "WJ6QTEIGBEIJ9K228MJEYIVU6CVTY9MFP6"
  }
};