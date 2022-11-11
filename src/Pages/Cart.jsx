import React from 'react'
import {useState,useEffect} from "react";
import axios from "axios";
import { Box,Heading,Grid,Image,Flex,Button } from "@chakra-ui/react";
import { Navigate } from 'react-router-dom';
import { getcart } from './api';
import { Link, NavLink } from "react-router-dom";

const getTodos = (args = {}) => {
    const {page = 1 } = args;
    return fetch(
      `https://thawing-eyrie-70822.herokuapp.com/api/cart?_page=${page}&_limit=3`
    ).then((res) => res.json());
  };
  
const deleteTodo = (id) => {
    return fetch(
      `https://thawing-eyrie-70822.herokuapp.com/api/cart/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((res) => res.json());
  };

function Cart() {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [titleSortBy, setTitleSortBy] = useState("ASC");
    const [page, setPage] = useState(1);
    const style={
        boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"10px",
        
    }
    
   
    
    //let dataCart = axios.get(`https://thawing-eyrie-70822.herokuapp.com/api/cart`)
    let sum=JSON.parse(localStorage.getItem("amount"));
    async function getData(){
        const url=`https://thawing-eyrie-70822.herokuapp.com/api/cart`;
        let res= await fetch(url);
        let data=await res.json();
        //console.log(data); 
        let dataCart=[];
        for(let i=0;i<data.length;i++){
            dataCart.push(data[i].price);
        }
        sum = dataCart.reduce(function (x, y) {
            return x + y;
        }, 0);
        localStorage.setItem("amount",JSON.stringify(sum));
        
    }
   
    /* const getData = () => {
        getcart().then((res) => {
            console.log(res.data)
            let dataLog = res.data
            array=dataLog
            let sum=dataLog.reduce((price)=>price,0)
            return console.log(sum)
        });   
    } */
   
    /* function totalbun(){
        return (
            <div>
                <Button>{JSON.parse(localStorage.getItem("amount"))}</Button>
            </div>
        )
    } */
    
      useEffect(() => {
        handleGetTodos();
        getData()
        let sum=JSON.parse(localStorage.getItem("amount"))
      }, [titleSortBy, page]);
    
      const handleGetTodos = () => {
        setLoading(false);
    
        getTodos({ titleSortBy, page })
          .then((res) => {
            setTodos(res);
            //console.log(res);
          })
          .catch((err) => {
            setLoading(false);
          });
      };

      const handleDelete = (id) => {
        setLoading(true);
        deleteTodo(id)
          .then((res) => {
            handleGetTodos();
          })
          .catch((err) => {
            setLoading(false);
          });
      };

  return (
    <div>
        <Grid templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={20} width="80%" margin={"auto"}>
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
            <div>
                <Button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}>
                Prev {" "}
                </Button>
                <Button>{page}</Button>
                <Button onClick={() => setPage((prev) => prev + 1)}>Next </Button>
            </div>
            <div>
                 <Flex w="80%" margin="auto">
                    <Button marginTop="20px" w="250px">Total={sum}</Button>
                    <Button marginTop="20px" w="250px"><NavLink to="/checkout">Checkout</NavLink></Button>     
                </Flex>                
            </div>
    </div>
  )
}

export default Cart