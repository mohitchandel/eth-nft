# OPCodeNFT Contract

This is a Solidity smart contract for creating and managing OPCodeNFTs (Non-Fungible Tokens) based on the ERC721 standard. The contract also includes functionality for minting, transferring, and querying NFT data.

## Contract Details

- **License**: MIT
- **Solidity Version**: ^0.8.4
- **Inheritance**: ERC721, ERC721Enumerable, ERC721URIStorage, AccessControl, Ownable

## Overview

The OPCodeNFT contract allows users to create and own unique NFTs. Each NFT consists of the following attributes:

- `tokenId`: The unique identifier of the NFT.
- `name`: A descriptive name associated with the NFT.
- `stack`: A stack representation linked to the NFT.
- `owner`: The Ethereum address of the NFT owner.

## Features

1. **Safe Minting**: The contract allows users to safely mint new NFTs with specified attributes.
2. **Token URI**: Each NFT has an associated URI that points to the token's metadata.
3. **Maximum Supply**: The contract enforces a maximum supply of 142 NFTs that can be minted.
4. **Access Control**: The contract uses the OpenZeppelin AccessControl library to manage roles, with the contract deployer being the default admin.
5. **Ownership**: The contract inherits from Ownable, allowing the contract owner to withdraw funds.
6. **ERC-721 Compliant**: The contract implements the ERC721 standard for NFTs, allowing easy integration with other platforms and marketplaces.

## Functions

1. `safeMint`: Allows users to safely mint new NFTs by providing necessary attributes such as URI, stack, name, and the price for minting.
2. `tokenURI`: Returns the token metadata URI for a given tokenId.
3. `supportsInterface`: Checks if the contract supports a given interface.
4. `withdrawFunds`: Allows the contract owner to withdraw accumulated contract funds.

## Notes

- The contract has a maximum supply of 142 NFTs, preventing more than 142 NFTs from being minted.
- The contract owner can withdraw accumulated funds by calling the `withdrawFunds` function.
- NFT data is stored in the `nftData` mapping, allowing easy retrieval of information associated with each NFT.

