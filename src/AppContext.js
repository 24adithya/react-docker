import React, { createContext, useContext, useState } from "react";
import { callHelloService } from "./AppService";

// Create a new context
const AppContext = createContext();

// Define a provider component
export const AppProvider = ({ children }) => {
  // State variables for data and loading state
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // Function to fetch data from API
  const fetchData = async (name) => {
    // Set loading state to true before fetching data
    setLoading(true);
    try {
      // Fetch data from API
      const response = await callHelloService(name);
      // Update state with fetched data
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // Set loading state to false after fetching data
      setLoading(false);
    }
  };

  // Create a context value containing data, loading state, and fetchData function
  const contextValue = {
    data,
    loading,
    fetchData, // Expose fetchData function
  };

  // Provide the context value to the AppContext.Provider
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useData must be used within a AppProvider");
  }
  return context;
};

// Export the context
export default AppContext;
