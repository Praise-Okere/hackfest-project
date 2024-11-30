import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./hooks/useSidebar.jsx";
import { AccountTypeProvider } from "./hooks/useAccountType.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AccountTypeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AccountTypeProvider>
    </BrowserRouter>
  </StrictMode>
);
