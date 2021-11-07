require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.7.5",
  paths: {
    artifacts: "./app/artifacts",
  },
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
