import { Link, Navigate, NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import Chicken from "./Chicken";
import { getTodos } from "./api";
import { Box,
    Image,FormControl,FormLabel,
    Input,
    Flex,
    Spacer,
    Heading,
    Modal,
    ModalBody,
    Text,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    Button,
    useDisclosure,
    ModalCloseButton,
    ModalFoote,InputGroup,InputLeftElement,InputRightElement,Stack,ModalFooter,MenuButton,Menu,ChevronDownIcon,MenuList,MenuItem

} from "@chakra-ui/react";


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
            let flag = false;
            dataLog.forEach(function(el){
                if(username===el.username && password===el.password){
                    return (flag = true);                
                }
            })
            if (flag) {
                alert("You Are Successfully Logged In.");
                handleLogin(username,authState.isAuth=true);               
                navigate("/");
              } else {
                alert("Wrong ID/Password");
              }
        });
    }

    if (!authState.isAuth) {
        return (
          <div>
            <Flex w="80%" margin="auto">
                <Box>
                    <Image src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>

                </Box>
                
                <Box marginLeft={"50px"} marginTop="50px" margin="auto">
                <Heading>Welcome to Chick Wings</Heading>
                <form onSubmit={handleSubmit} marginTop="30px">
                <div>
                <FormLabel>Username</FormLabel>
                <label>
                    <Input
                    type="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                </div>
                <div>
                <FormLabel>Password</FormLabel>
                <label>
                    <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    />
                </label>
                </div>
                <div>
                <Button type="submit" marginTop={"20px"}>
                    SUBMIT
                </Button>
                </div>
                </form>
                <Button backgroundColor={"red"} color="white" marginTop={"20px"}><NavLink to="/signup">Dont Have An Account Signup Now!</NavLink></Button>
                </Box>
            </Flex>
            
          </div>
        );
      }
      return(
        <NavLink to="/"></NavLink>
      )
 
}

export default Login