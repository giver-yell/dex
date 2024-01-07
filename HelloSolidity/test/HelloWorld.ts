import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld contract", function () {
    it("getMessage returns HelloWorld", async function() {
        const HelloWorld = await ethers.getContractFactory("HelloWorld")
        const helloworld = await HelloWorld.deploy()
        await helloworld.waitForDeployment()
        
        expect(await helloworld.getMessage()).to.equal("Hello World!");
    });
});
