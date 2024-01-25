const { ethers } = require("ethers");

    async function main() {
      // Configuring the connection to an Ethereum node
      const provider = new ethers.AlchemyProvider("matic", process.env.API_KEY)
      // Creating a signing account from a private key
      const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY, provider);

      // Creating and sending the transaction object
      const tx = await signer.sendTransaction({
        to: "0x732FA0A1f207A6C300609c820cA151E2AD8BE3DC",
        value: ethers.parseUnits("0.001", "ether"),
      });
      console.log("Mining transaction...");
      console.log("Sent transaction", tx);
      /*console.log(`https://${network}.etherscan.io/tx/${tx.hash}`);
      // Waiting for the transaction to be mined
      const receipt = await tx.wait();
      // The transaction is now on chain!
      console.log(`Mined in block ${receipt.blockNumber}`);*/

    }

    require("dotenv").config();
    main();