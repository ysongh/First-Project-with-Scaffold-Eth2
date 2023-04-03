// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

contract ProofParticipation {
  uint256 public totalParticipation = 0;

  mapping(address => uint256[]) public proofs;

  event ProofOfParticipationCreated(address to, uint256 cid, uint date);

  constructor() {}

  function sendProofOfParticipation(address to) external {
    proofs[to].push(totalParticipation);
    emit ProofOfParticipationCreated(to, totalParticipation, block.timestamp);
    totalParticipation++;
  }

  function getProofOfParticipation(address to) external view returns (uint256[] memory) {
    return proofs[to];
  }
}