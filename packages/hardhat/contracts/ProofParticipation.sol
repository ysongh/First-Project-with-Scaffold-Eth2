// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ProofParticipation is ERC721URIStorage{
  address public owner;
  uint256 public totalParticipation = 0;
  string public collectionURL;
  string public collectionName;
  string public collectionSymbol;

  mapping(address => uint256[]) public proofs;

  event ProofOfParticipationCreated(address to, string url, uint date);

  constructor(address newOwner, string memory url, string memory name, string memory symbol) ERC721(name, symbol) {
    owner = newOwner;
    collectionURL = url;
    collectionName = name;
    collectionSymbol = symbol;
  }

  modifier isOwner(address from) {
    require(from == owner, "Not the Owner");
    _;
  }

  function sendProofOfParticipation(address from, address to) external isOwner(from) returns (string memory, string memory, uint) {
    _mint(to, totalParticipation);
    _setTokenURI(totalParticipation, collectionURL);
    proofs[to].push(totalParticipation);
    emit ProofOfParticipationCreated(to, collectionURL, block.timestamp);
    totalParticipation++;
    
    return (collectionURL, collectionName, block.timestamp);
  }
}