import { useState, createContext, useContext, useEffect } from "react";

// Create a context
const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Automatically handle sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Close the sidebar if the screen width is less than 768px
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Create a custom hook to use the sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};
