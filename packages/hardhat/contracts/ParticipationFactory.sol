// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

import "./ProofParticipation.sol";

contract ParticipationFactory {
  mapping(address => address[]) public addressToCollection;

  constructor() {}

  function createCollection(string calldata url) external returns (address) {
    ProofParticipation newCollection = new ProofParticipation(url);
    addressToCollection[msg.sender].push(address(newCollection));
    return address(newCollection);
  }

  function getCollection(address to) external view returns (address[] memory) {
    return addressToCollection[to];
  }

  function sendProofOfParticipation(address collectionAddress, address to) external {
    ProofParticipation collection = ProofParticipation(collectionAddress);
    collection.sendProofOfParticipation(to);
  }

  function getProofOfParticipation(address collectionAddress, address to) external view returns (string[] memory) {
    ProofParticipation collection = ProofParticipation(collectionAddress);
    return collection.getProofOfParticipation(to);
  }
}