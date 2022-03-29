//SPDX-License-Identifier: UNLICENSED
//Solidity version decalaration
pragma solidity ^0.8.0;

import "../contracts/Transactions.sol";

contract TestTransactions {
    function testInitialTransactions() {
        Transactions contract = Transactions(Transactions.deployed().address);
        assert.equal(contract.getTransactionCount(), 0);
    }

    function testAddNewTransaction() {
        Transactions contract = Transactions.deployed();
        contract.addToBlockchain(0x0, 0, "", "");
        assert.equal(contract.getTransactionCount(), 1);
    }

    function testReturnTransactions() {
        Transactions contract = Transactions.deployed();
        assert.equal(contract.getAllTransactions()[0].sender, 0x0);
    }
}
