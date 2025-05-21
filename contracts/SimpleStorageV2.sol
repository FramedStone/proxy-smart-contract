// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import "./SimpleStorageV1.sol";

contract SimpleStorageV2 is SimpleStorageV1 {
    function initialize(uint8 val_) public {
        SimpleStorageV1.initialize(msg.sender);
        setVal(val_);
    }

    function inc() public isAdmin {
        uint8 current = this.getVal();
        setVal(current + 1);
    }
}
