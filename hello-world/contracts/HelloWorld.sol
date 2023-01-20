// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract HelloWorld {
    string greeting = "What's up dog";

    function sayHello() public view returns (string memory) {
        return greeting;
    }

    function sayGreeting(string memory words) public {
        greeting = words;
    }
}