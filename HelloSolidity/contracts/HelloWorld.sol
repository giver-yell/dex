// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract HelloWorld {
    function getMessage() external pure returns (string memory) {
        return "Hello World!";
    }
}
