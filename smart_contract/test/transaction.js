const Transactions = artifacts.require("Transactions");

contract('Transactions', () => {
  it('should save count of transactions, where initial cound is 0', async () => {
    const transactions = await Transactions.deployed();
    const count = await transactions.getTransactionCount();
    assert.equal(count, 0, 'count should be 0');
  });
});