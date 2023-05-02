// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

import "./ProofParticipation.sol";

contract ParticipationFactory {
  mapping(address => address[]) public addressToCollection;
  mapping(address => ProofOfParticipation[]) public userParticipationURLs;

  constructor() {}

  struct ProofOfParticipation {
    string url;
    string name;
    uint date;
  }

  function createCollection(string calldata url, string calldata name, string calldata symbol) external returns (address) {
    ProofParticipation newCollection = new ProofParticipation(msg.sender, url, name, symbol);
    addressToCollection[msg.sender].push(address(newCollection));
    return address(newCollection);
  }

  function getCollection(address to) external view returns (address[] memory) {
    return addressToCollection[to];
  }

  function sendProofOfParticipation(address collectionAddress, address to) external {
    ProofParticipation collection = ProofParticipation(collectionAddress);
    (string memory newURL, string memory newName, uint date) = collection.sendProofOfParticipation(msg.sender, to);
    userParticipationURLs[to].push(ProofOfParticipation(newURL, newName, date));
  }

  function getProofOfParticipation(address to) external view returns (ProofOfParticipation[] memory) {
    return userParticipationURLs[to];
  }
}