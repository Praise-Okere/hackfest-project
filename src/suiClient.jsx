import { JsonRpcProvider, RawSigner, Connection, Keypair } from '@mysten/sui.js';

// Initialize connection to the Sui network
const connection = new JsonRpcProvider(new Connection({ fullnode: 'https://fullnode.devnet.sui.io' }));

// Generate a new keypair (you can replace this with a method to fetch user's keypair from zkLogin if needed)
const keypair = Keypair.fromSecretKey(Uint8Array.from([/* secret key */]));

// Create a signer instance
const signer = new RawSigner(keypair, connection);

// Function to get Sui account balance
export const getAccountBalance = async () => {
  const balance = await signer.getBalance();
  console.log("Account Balance:", balance);
};

// Function to send a transaction
export const sendTransaction = async (transactionData) => {
  const txn = await signer.signAndExecuteTransaction(transactionData);
  console.log("Transaction Sent:", txn);
};
