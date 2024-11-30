import { zkLogin } from '@zkLogin/zklogin';

export const zkLoginClient = new zkLogin({
  apiUrl: "https://zklogin.example.com",  // Replace with actual zkLogin API URL
  appName: "MyViteApp",  // Your application name
});

// Function to trigger login flow
export const loginWithZK = async () => {
  try {
    const loginResult = await zkLoginClient.login();
    console.log("Login Success:", loginResult);
    return loginResult;
  } catch (error) {
    console.error("Login Failed:", error);
  }
};
