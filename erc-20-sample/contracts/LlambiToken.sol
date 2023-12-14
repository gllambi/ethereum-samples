// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";

contract LlambiToken is ERC20 {

    constructor() ERC20("LlambiToken", "LLT"){
        _mint(msg.sender, 5000*10**18);
    }
}

