import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../../service/CategoryService.js";


// Step 1: Create the context object
export const AppContext = createContext(null);

// Step 2: Create a context provider component
export const AppContextProvider = (props) => {

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        async function loadData() {
            const response = await fetchCategories();
            setCategories(response.data);
        }
        loadData();
    }, []); 

    const contextValue = {
    // Any global values you want to share go here
    categories,setCategories
    };

  return (
    // Step 3: Use AppContext.Provider 
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
