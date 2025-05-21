import { ethers, upgrades } from "hardhat";

async function main() {
  const [admin] = await ethers.getSigners();
  const SimpleStorageV1 = await ethers.getContractFactory("SimpleStorageV1");

  const proxy = await upgrades.deployProxy(SimpleStorageV1, [admin.address], {
    initializer: "initialize",
    // useDefenderDeploy: true,
  });

  await proxy.waitForDeployment();
  console.log("SimpleStorageV1 deployed to:", await proxy.getAddress());
}

main();