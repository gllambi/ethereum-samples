// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const account = "0x732FA0A1f207A6C300609c820cA151E2AD8BE3DC";

  const LlambiToken = await hre.ethers.deployContract("LlambiToken", [account]);

  await LlambiToken.waitForDeployment();

  const contractAddress = (await LlambiToken).target
  console.log("Contract deployed to: ", contractAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


