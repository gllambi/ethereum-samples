require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli : {
      url: "https://eth-goerli.g.alchemy.com/v2/MlfELO5kdKVdNH89TI5BC-2cXYVTYPeL",
      accounts: ['0x'+process.env.PRIVATE_KEY]
    }
  }
};
