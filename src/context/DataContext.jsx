import { createContext, useState, useEffect } from "react";

// Create a context to share data globally
const DataContext = createContext(null);
const DataProvider = (props) => {
    const [dataLoading, setDataLoading] = useState(false);


  // Create the context value object
  const contextValue = {
    dataLoading,
    }

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};


export default DataProvider;
export { DataContext, DataProvider };
