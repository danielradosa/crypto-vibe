//SPDX-License-Identifier: UNLICENSED
//Solidity version decalaration
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MetaCoin.sol";

contract TestMetaCoin {

  function testInitialBalanceUsingDeployedContract() public {
    MetaCoin meta = MetaCoin(DeployedAddresses.MetaCoin());

    uint expected = 300;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 300 MetaCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    MetaCoin meta = new MetaCoin();

    uint expected = 300;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 300 MetaCoin initially");
  }

}
