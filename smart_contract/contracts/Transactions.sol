//SPDX-License-Identifier: UNLICENSED
//Solidity version decalaration
pragma solidity ^0.8.0;

//Contract class
contract Transactions {
    //Variable to save count of transactions
    uint256 transactionCount;

    //Data variables to be passed
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    //Structure of transfer
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    //Pass data as array
    TransferStruct[] transactions;

    //Add transaction to blockchain
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    //Return transactions
    function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
    }

     //Return transaction count
    function getTransactionCount() public view returns (uint256){
        return transactionCount;
    }  
}