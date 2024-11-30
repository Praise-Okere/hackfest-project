import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./hooks/useSidebar.jsx";
import { AccountTypeProvider } from "./hooks/useAccountType.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";
// import { AuthProvider } from "./auth/getzkJWT.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AccountTypeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AccountTypeProvider>
      <SidebarProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <WalletProvider>
            <App />
          </WalletProvider>
        </GoogleOAuthProvider>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
