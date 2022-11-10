import React from "react";
import {useState} from "react";

export const AppContext = React.createContext();

AppContext.displayName = "CONTEXT1234";


function AppContextProvider({ children }) {
    const [state, setState] = useState({
        isAuth: false,
        username:null
    });

    const handleLogin=(username)=> {
        
        setState({
          ...state,
          isAuth: true,
          username
        });
        
      }

      const handleLogout=()=>{
        
        setState({
            ...state,
            isAuth:true,
            username:null
        });
       
      }

      const value = { authState:state, handleLogin, handleLogout };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
