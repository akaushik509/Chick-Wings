import React from 'react'
import { Heading,Grid,Image,Flex,Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Footer from './Footer';


function Cart({cart,handleAddintoCart,handleRemoveProduct}) {
 
    const style={
        boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"10px",  
    }
    
    const total = cart.reduce((price,item)=>price+item.quantity*item.price,0)

  return (
    <div>
        <Grid templateRows='repeat(1, 1fr)'
                    templateColumns='repeat(3, 1fr)'
                    gap={20} width="80%" margin={"auto"}>
                {
                    cart.map((item)=>(
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
                                <Flex>
                                  <Button onClick={()=>handleAddintoCart(item)}>+</Button>
                                  <Button>{item.quantity}</Button>
                                  <Button onClick={()=>handleRemoveProduct(item)}>-</Button>
                                </Flex>
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
                 <Flex w="80%" margin="auto">
                    <Button marginTop="20px" w="250px">Total={total}</Button>
                    <Button marginTop="20px" w="250px"><NavLink to="/checkout" >Checkout</NavLink></Button>     
                </Flex>                
            </div>
            <div>
                <Footer/>
            </div>
    </div>
  )
}

export default Cart