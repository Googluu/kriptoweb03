require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/cAtUWaC3Zmu12vSsRGaUpjXG_iqoZ_GG",
      accounts: ["0c5c82993263b8957441f6ed2ffce6b13bd953bc4a2ce64b8e52bc7c8b3f16a5"]
    }
  }
}