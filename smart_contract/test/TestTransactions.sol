//SPDX-License-Identifier: UNLICENSED
//Solidity version decalaration
pragma solidity ^0.8.0;

import "../contracts/Transactions.sol";
import "truffle/Assert.sol";

contract TestTransactions {
    function saveCountOfTransactions () public {
        Transactions transactions = new Transactions();
        uint expected = 0;
        Assert.equal(transactions.getTransactionCount(), expected, "Transaction count should be 0");
    }
}