import React from 'react'
import {useState,useEffect} from "react";
import axios from "axios";
import { Box,Heading,Grid,Image,Flex,Button } from "@chakra-ui/react";


function Cart() {
    const style={
        boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"10px",
        
    }
    const [todos, setTodos] = useState([]);
    
    const getData = () => {
       return axios.get(`https://thawing-eyrie-70822.herokuapp.com/api/cart`);
    };
    useEffect(() => {
        getData().then((res) => setTodos(res.data));
      }, []);

    const deleteTodo = (id) => {
        return fetch(
          `https://thawing-eyrie-70822.herokuapp.com/api/cart/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then((res) => res.json())
          .then((res) => {
            setTodos(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const handleDelete = (id) => {
        deleteTodo(id)
          .then((res) => {
            getData();
          })
          .catch((err) => {
            console.log(err)
          });
      };

  return (
    <div>
        {/* {console.log(cartItems)} */}
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
                                <Button backgroundColor={"red"} color="white" onClick={() => handleDelete(item.id)}>Delete</Button>
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
    </div>
  )
}

export default Cart