import { generateNonce, generateRandomness } from '@mysten/sui/zklogin';

const FULLNODE_URL = 'https://fullnode.devnet.sui.io'; // replace with the RPC URL you want to use
const suiClient = new SuiClient({ url: FULLNODE_URL });
const { epoch, epochDurationMs, epochStartTimestampMs } = await suiClient.getLatestSuiSystemState();

const maxEpoch = Number(epoch) + 2; // this means the ephemeral key will be active for 2 epochs from now.
const ephemeralKeyPair = new Ed25519Keypair();
const randomness = generateRandomness();
const nonce = generateNonce(ephemeralKeyPair.getPublicKey(), maxEpoch, randomness);






// import { createContext, useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';  // Import PropTypes
// import { zkLoginClient } from '../zkLoginClient'; // Assuming you created this as shown earlier
// import { getAccountBalance, sendTransaction } from '../suiClient'; // Assuming you created this as shown earlier

// // Create a context
// const AuthContext = createContext();

// // AuthProvider component to wrap your app
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [balance, setBalance] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Function to handle login using zkLogin
//   const loginWithZK = async () => {
//     try {
//       setLoading(true);
//       const loginResult = await zkLoginClient.login();
//       if (loginResult) {
//         setUser(loginResult.user);
//         await fetchAccountBalance(loginResult.user);
//       }
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch Sui account balance after login
//   const fetchAccountBalance = async (user) => {
//     try {
//       const balance = await getAccountBalance(user.suiAddress);
//       setBalance(balance);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   // Function to send a transaction using Sui
//   const handleSendTransaction = async (transactionData) => {
//     try {
//       await sendTransaction(transactionData);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   useEffect(() => {
//     // Optionally check if user is already logged in or restore session on app load
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         balance,
//         loading,
//         error,
//         loginWithZK,
//         handleSendTransaction,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Add PropTypes for children to ensure the correct prop type
// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired, // children must be a valid React node (string, element, etc.)
// };

// // Custom hook to use the context
// export const useZK = () => useContext(AuthContext);