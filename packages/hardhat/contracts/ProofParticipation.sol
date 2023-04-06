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

  function sendProofOfParticipation(address to) external returns (string memory) {
    _mint(to, totalParticipation);
    _setTokenURI(totalParticipation, collectionURL);
    proofs[to].push(totalParticipation);
    emit ProofOfParticipationCreated(to, collectionURL, block.timestamp);
    totalParticipation++;
    
    return collectionURL;
  }
}