import {useState,useEffect} from "react";
import axios from "axios";
import { Box,Heading,Grid,Image,Flex,Button } from "@chakra-ui/react";
import Footer from "./Footer";

function Fish({handleAddintoCart}){
    const style={
        boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"10px",
        
    }
    const [todos, setTodos] = useState([]);
    const [cart, setCart] = useState([]);
    const getData = () => {
       return axios.get(`https://mock-server-kkz2.onrender.com/fish`);
    };
    useEffect(() => {
        getData().then((res) => setTodos(res.data));
      }, []);
    
     
    

    return(
        <Box width={"80%"} margin="auto" >
            <Flex gap="30px" >
                <Box align="left">
                    <Heading size="lg">Fish</Heading>
                </Box>
                <Box align="left">
                    <Flex>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78c6b83b3c" w="40px"  />
                    <p size="lg">Prime-grade-Meats</p>
                    </Flex>
                </Box>
                <Box align="left">
                    <Flex>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e78c97c079f" w="40px"/>
                    <p size="lg">Sourcing</p>
                    </Flex>
                </Box>
                <Box align="left">
                    <Flex>
                    <Image src="https://d2407na1z3fc0t.cloudfront.net/USP/usp_58e792ad92488" w="40px"/>
                    <p size="lg">Expertly carved pieces</p>
                    </Flex>
                </Box>
            </Flex>
            <hr/>
            <Grid templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={20}>
                {
                    todos.map((item)=>(
                        <div style={style} key={item.id}>
                            <Image src={item.image}/>
                            <Heading size="xs">{item.title}</Heading>
                            <br/>
                            <br/>
                            <p>{item.description}</p>
                            <br/>
                            <br/>
                            <Heading size="xs">{item.qty}</Heading>
                            <br/>
                            <Flex justifyContent={"space-between"}>
                                <Heading size="md">Rs{item.price}</Heading>
                                <Button backgroundColor={"red"} color="white" onClick={() => handleAddintoCart(item)}>ADD TO CART</Button>
                            </Flex>
                            <br/>
                            <hr/>
                            <Flex justifyContent={"center"}>
                                <Image src="https://www.licious.in/img/rebranding/express_delivery.svg"/>
                                <p>Today in 90 min</p>
                            </Flex>
                        </div>
                    ))
                }
            </Grid>
            
            <div>
                <Footer/>
            </div>
        </Box>
    )
}
export default Fish