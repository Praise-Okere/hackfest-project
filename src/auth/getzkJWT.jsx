import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; // For Google OAuth login
import { Ed25519Keypair } from '@mysten/sui.js';  // For Sui ephemeral key pair
import { zkLoginClient } from 'zkLogin'; // Hypothetical zkLogin client

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle Google Login success
  const handleLoginSuccess = async (response) => {
    // The response contains the Google OAuth token, which we will use for authentication
    const { credential } = response;

    try {
      setLoading(true);

      // Step 1: Generate an ephemeral key pair (public and private keys)
      const ephemeralKeyPair = Ed25519Keypair.generate();
      const publicKey = ephemeralKeyPair.getPublicKey().toString('hex');
      const privateKey = ephemeralKeyPair.getPrivateKey().toString('hex');

      // Step 2: Generate a challenge (in practice, this could be a nonce or random string)
      const challenge = 'some-random-challenge';  // Example challenge

      // Step 3: Sign the challenge with the ephemeral private key
      const signature = zkLoginClient.signWithPrivateKey(privateKey, challenge);

      console.log('Signed Challenge:', signature);

      // Step 4: Verify the signature using the public key
      const isValid = zkLoginClient.verifySignature(publicKey, challenge, signature);

      if (isValid) {
        // Here, you would typically send the credential and the publicKey to your backend or zkLogin service
        // for further verification and authentication (e.g., through your Sui smart contract).

        console.log('User authenticated successfully via zkLogin!');
        
        // Step 5: After verification, authenticate the user
        setUser({ googleCredential: credential, publicKey });
      } else {
        console.log('Authentication failed!');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Google Login failure
  const handleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <div>
      <h1>Sui App - zkLogin Authentication with Google</h1>

      {/* Google OAuth Login Button */}
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
        useOneTap
      />

      {loading && <p>Authenticating...</p>}

      {user && (
        <div>
          <h2>Welcome, User!</h2>
          <p>Google ID: {user.googleCredential}</p>
          <p>Public Key: {user.publicKey}</p>
        </div>
      )}
    </div>
  );
};

export default App;
