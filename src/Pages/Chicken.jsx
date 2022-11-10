import {useState,useEffect} from "react";
import axios from "axios";
import { Box,Heading,Grid,Image,Flex,Button } from "@chakra-ui/react";

function Chicken(){
    const style={
        boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"10px",
        
    }
    const [todos, setTodos] = useState([]);
    const getData = () => {
       return axios.get(`https://thawing-eyrie-70822.herokuapp.com/api/chicken`);
    };
    useEffect(() => {
        getData().then((res) => setTodos(res.data));
      }, []);
    
      const handleAddintoCart = (e)=>{
        const {id,image,title,description,qty,price}=e
        fetch("https://thawing-eyrie-70822.herokuapp.com/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ image,title,description,qty,price })
        })
        .then((res) => res.json())
          .catch((err) => {
            console.log(err);
          });
        console.log(e);
    }
    

    return(
        <Box width={"80%"} margin="auto" >
            <Flex gap="30px" border={"1px solid"}>
                <Box align="left">
                    <Heading size="lg">Chicken</Heading>
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
            
            {/* {todos.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))} */}
        </Box>
    )
}
export default Chicken