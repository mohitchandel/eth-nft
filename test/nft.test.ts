import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";

describe("ETH NFT", function () {
  let admin: any;
  let user: any;
  let contract: Contract;

  /* This is a function that runs before each test case. */
  beforeEach(async function () {
    [admin, user] = await ethers.getSigners();

    const ethOpNFT = await ethers.getContractFactory(
      "OPCodeNFT"
    );
    contract = await ethOpNFT.deploy();
    await contract.deployed();
  });

  describe("OP NFT", function () {
    /* This is a test case to check for lock funds. */
    it("Should Mint NFT", async function () {
      const price = ethers.BigNumber.from("100000000000000000000");

      await contract.safeMint(admin.address, "ipfs://TOKEN_CID", "00", "stop", price, { value: price });
      const ownerOf = await contract.ownerOf(0);
      expect(ownerOf).to.equal(admin.address);
    });
  });  
});
