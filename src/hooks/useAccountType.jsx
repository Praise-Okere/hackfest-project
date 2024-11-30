import { createContext, useContext, useState } from "react";

// Create account type context
const AccountTypeContext = createContext();

// Create provider for context
export const AccountTypeProvider = ({ children }) => {
  const [accountType, setAccountType] = useState("individual");

  const setIndividual = () => {
    setAccountType("individual");
  };
  const setBusiness = () => {
    setAccountType("business");
  };

  console.log(accountType);

  return (
    <AccountTypeContext.Provider
      value={{ setIndividual, setBusiness, accountType }}
    >
      {children}
    </AccountTypeContext.Provider>
  );
};

// Create a custom hook to use the sidebar context
export const useAccountType = () => {
  const context = useContext(AccountTypeContext);
  if (!context) {
    throw new Error("useSidebar must be used within a AccountType Provider");
  }

  return context;
};
