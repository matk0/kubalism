const hre = require("hardhat");

async function main() {
  const KubalismNFT = await hre.ethers.getContractFactory("KubalismNFT");
  const kubalismNFT = await KubalismNFT.deploy();

  await kubalismNFT.deployed();

  console.log("KubalismNFT deployed to:", kubalismNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });