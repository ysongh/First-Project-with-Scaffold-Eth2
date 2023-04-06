// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ProofParticipation is ERC721URIStorage{
  uint256 public totalParticipation = 0;
  string public collectionURL;

  mapping(address => uint256[]) public proofs;

  event ProofOfParticipationCreated(address to, string url, uint date);

  constructor(string memory url) ERC721("Proof of Participation", "POP") {
    collectionURL = url;
  }

  function sendProofOfParticipation(address to) external {
    _mint(to, totalParticipation);
    _setTokenURI(totalParticipation, collectionURL);
    proofs[to].push(totalParticipation);
    emit ProofOfParticipationCreated(to, collectionURL, block.timestamp);
    totalParticipation++;
  }

  function getProofOfParticipation(address to) external view returns (string[] memory) {
    string[] memory urls = new string[](proofs[to].length);

    for(uint i = 0; i < proofs[to].length; i++) {
      string memory url = tokenURI(i);
      urls[i] = url;
    }

    return urls;
  }
}