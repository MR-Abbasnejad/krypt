//  https://eth-ropsten.alchemyapi.io/v2/Xo7y819U7PEloPQg55c9YqjWzADdlo3M

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.7',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Xo7y819U7PEloPQg55c9YqjWzADdlo3M',
      accounts: [
        'fa35c430f3e837b37b4d1374a430ddc83d23ffbe49cb2c184f3da77732e4a608',
      ],
    },
  },
};
