// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/Transactions.sol";

contract TransactionsTest {
    
    Transactions public transactions;

    // Executee avant chaque test
    function setUp() public {
        transactions = new Transactions();
    }

    // Test 1 : Le compteur doit etre 0 au deploiement
    function testInitialCountIsZero() public view {
        assert(transactions.getTransactionCount() == 0);
    }

    // Test 2 : Ajouter une transaction incremente le compteur
    function testAddOneTransaction() public {
        transactions.addToBlockchain(
            payable(address(0x1234567890123456789012345678901234567890)),
            1000000000000000,
            "Hello Blockchain EMSI",
            "emsi"
        );
        assert(transactions.getTransactionCount() == 1);
    }

    // Test 3 : Ajouter deux transactions
    function testAddMultipleTransactions() public {
        transactions.addToBlockchain(
            payable(address(0x1234567890123456789012345678901234567890)),
            1000000000000000,
            "Transaction 1",
            "keyword1"
        );
        transactions.addToBlockchain(
            payable(address(0x1234567890123456789012345678901234567890)),
            2000000000000000,
            "Transaction 2",
            "keyword2"
        );
        assert(transactions.getTransactionCount() == 2);
    }

    // Test 4 : Recuperer toutes les transactions
    function testGetAllTransactions() public {
        transactions.addToBlockchain(
            payable(address(0x1234567890123456789012345678901234567890)),
            500000000000000,
            "Test message",
            "test"
        );
        assert(transactions.getAllTransactions().length == 1);
    }
}