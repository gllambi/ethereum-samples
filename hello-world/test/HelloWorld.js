const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    let [alice, bob] = accounts;

    it("say hello", async () => {
        const contractInstance = await HelloWorld.new();
        const greetings = "Hello Bob";

        const result = await contractInstance.sayGreeting(greetings, { from: alice });
        const salutation = await contractInstance.sayHello({ from: alice });

        assert.equal(result.receipt.status, true);
        assert.equal(salutation, greetings);
    })
})