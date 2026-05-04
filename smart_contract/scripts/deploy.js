import { ethers } from "ethers";
import { readFileSync } from "fs";

const artifact = JSON.parse(
  readFileSync("./artifacts/contracts/Transactions.sol/Transactions.json", "utf8")
);

const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const factory = new ethers.ContractFactory(
  artifact.abi,
  artifact.bytecode,
  wallet
);

const contract = await factory.deploy();
await contract.waitForDeployment();

const address = await contract.getAddress();
console.log("Contrat deploye a l'adresse :", address);