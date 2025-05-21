// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.29;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract SimpleStorageV1 is Initializable {
    uint8 private val; 
    address internal admin; 

    modifier isAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    function initialize(address admin_) public initializer {
        admin = admin_;
    }

    function setVal(uint8 val_) public isAdmin {
        val =  val_;
    }

    function getVal() public view returns(uint8 val_) { return val; }
}