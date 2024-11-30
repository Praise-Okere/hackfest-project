import { createContext, useContext, useState, useEffect } from "react";

// Create account type context
const AccountTypeContext = createContext();

// Create provider for context
export const AccountTypeProvider = ({ children }) => {
  const [accountType, setAccountType] = useState("");

  // Function to set accountType as individual
  const setIndividual = () => {
    setAccountType("individual");
  };

  // Function to set accountType as business
  const setBusiness = () => {
    setAccountType("business");
  };

  // Load accountType from localStorage when the component mounts
  useEffect(() => {
    const savedAccountType = localStorage.getItem("accountType");
    const savedTime = localStorage.getItem("accountTypeTimestamp");

    // Check if the saved accountType is still valid (within 1 hour)
    if (savedAccountType && savedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - savedTime;

      if (elapsedTime < 3600000) {
        // 1 hour = 3600000ms
        setAccountType(savedAccountType);
      } else {
        // Clear accountType from localStorage after 1 hour
        localStorage.removeItem("accountType");
        localStorage.removeItem("accountTypeTimestamp");
      }
    }
  }, []);

  // Save accountType to localStorage whenever it changes
  useEffect(() => {
    if (accountType) {
      localStorage.setItem("accountType", accountType);
      localStorage.setItem("accountTypeTimestamp", new Date().getTime());
    }
  }, [accountType]);

  console.log(accountType);

  return (
    <AccountTypeContext.Provider
      value={{ setIndividual, setBusiness, accountType }}
    >
      {children}
    </AccountTypeContext.Provider>
  );
};

// Create a custom hook to use the account type context
export const useAccountType = () => {
  const context = useContext(AccountTypeContext);
  if (!context) {
    throw new Error(
      "useAccountType must be used within an AccountTypeProvider"
    );
  }
  return context;
};
