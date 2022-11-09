import React from "react";
import {useState} from "react";

export const AppContext = React.createContext();

AppContext.displayName = "CONTEXT1234";
const initState = {
    isAuth: false,
    mob:null
  };

function AppContextProvider({ children }) {
    const [state, setState] = useState(initState);

    function handleLogin(mob) {
        setState({
          ...state,
          isAuth: true,
          mob
        });
      }

      function handleLogout() {
        setState(initState);
      }

      const value = { authState:state, handleLogin, handleLogout };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
