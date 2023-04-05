// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ProofParticipation is ERC721URIStorage{
  uint256 public totalParticipation = 0;

  mapping(address => uint256[]) public proofs;

  event ProofOfParticipationCreated(address to, string cid, uint date);

  constructor() ERC721("Proof of Participation", "POP") {}

  function sendProofOfParticipation(address to, string calldata url) external {
    _mint(to, totalParticipation);
    _setTokenURI(totalParticipation, url);
    proofs[to].push(totalParticipation);
    emit ProofOfParticipationCreated(to, url, block.timestamp);
    totalParticipation++;
  }

  function getProofOfParticipation(address to) external view returns (uint256[] memory) {
    return proofs[to];
  }
}