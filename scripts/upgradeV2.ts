import { ethers, upgrades } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

const PROXY = process.env.SIMPLE_STORAGE_V1_PROXY || "";

async function main() {
  const SimpleStorageV2 = await ethers.getContractFactory("SimpleStorageV2");

  await upgrades.upgradeProxy(PROXY, SimpleStorageV2); 
  console.log("SimpleStorageV1 upgraded to V2");
}

main();