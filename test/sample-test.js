const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CroudFunding", function () {
  it("Should return the new greeting once it's changed", async function () {
    const CroudFunding = await ethers.getContractFactory("CroudFunding");
    const cf = await CroudFunding.deploy();
    await cf.deployed();
    console.log(cf.address);
  });
});
