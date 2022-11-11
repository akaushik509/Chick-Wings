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



function Signup() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const { loginUser, authState } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    getTodos().then((result) => {
        console.log(result.data)
        let dataLog = result.data
        let filter = dataLog.filter(function(el){
            return username===el.username
        })
            if(filter.length>0){
                alert("No")  
                return;           
            }else{
                fetch("https://thawing-eyrie-70822.herokuapp.com/api/login2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
                })
                .then((res) => res.json())
                .then((res) => {
                    if (res) {
                        alert("Account Created");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        })
    ;
}
  
  

    {
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
                    SignUp
                </Button>
                </div>
                </form>
                <Button backgroundColor={"red"} color="white" marginTop={"20px"}><NavLink to="/login">SignIn Now!</NavLink></Button>
                </Box>
            </Flex>
            
          </div>
        );
      }
      return(
        <NavLink to="/"></NavLink>
      )
 
}

export default Signup