import { ethers } from "hardhat";

async function main() {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.waitForDeployment();
  
  console.log("✅ Contrat déployé à l'adresse :", 
    await transactions.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});