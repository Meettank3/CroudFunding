import hre from "hardhat";

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CroudFunding");

  // In ethers v6, deploy() returns the contract directly and is already deployed after awaiting deploy()
  const contract = await CrowdFunding.deploy();

  // No need to call contract.deployed() in ethers v6
  console.log("CroudFunding deployed to:", contract.target); // or contract.getAddress()
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
