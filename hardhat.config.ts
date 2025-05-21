import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition"; 
import "@openzeppelin/hardhat-upgrades";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.29",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: process.env.ACCOUNT_PRIVATE_KEY ? [process.env.ACCOUNT_PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  defender: {
    apiKey: process.env.DEFENDER_API_KEY || "",
    apiSecret: process.env.DEFENDER_API_SECRET || "",
    // useDefenderDeploy: true,
  }
};

export default config;
