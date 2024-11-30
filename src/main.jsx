import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./hooks/useSidebar.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { AuthProvider } from "./auth/getzkJWT.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
