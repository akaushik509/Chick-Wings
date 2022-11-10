import { Link, Navigate, NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import Chicken from "./Chicken";
import { getTodos } from "./api";

function Login() {
    const {authState, handleLogin, handleLogout} = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        getTodos().then((res) => {
            console.log(res.data)
            let dataLog = res.data
            dataLog.forEach(function(el){
                if(username===el.username && password==el.password){
                    handleLogin(username);               
                    console.log(authState.isAuth)
                    navigate("/");
                }else{
                    console.log("NO");
                }
            })
        });
    }

    if (!authState.isAuth) {
        return (
          <div>
            <form onSubmit={handleSubmit}>
            <div>
            <label>
                <input
                type="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            </div>
            <div>
            <label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                />
            </label>
            </div>
            <div>
            <button type="submit">
                SUBMIT
            </button>
            </div>
        </form>
          </div>
        );
      }
      return(
        <NavLink to="/"></NavLink>
      )
 
}

export default Login