require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId

    //deploy multiSigFactory
    const MultiSigFactory = await ethers.getContractFactory('MultiSigFactory');
    console.log('Deploying MultiSigFactory...');
    const multiSigFactory = await MultiSigFactory.deploy();
    await multiSigFactory.deployed()
    console.log('multiSigFactory deployed to:', multiSigFactory.address);

}