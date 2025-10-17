import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: {
    version: "0.8.28",
    defaultNetwork: "sepolia",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia/804ec1f9780238ba173768322233807b12f268abd597696e0f9875938249f9bc",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
