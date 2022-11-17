import React from 'react'
import { Box,Heading,Image,Flex,Button, FormControl,
  FormLabel,
  FormHelperText,Input } from "@chakra-ui/react";

function Checkout({cart}) {
  const total = cart.reduce((price,item)=>price+item.quantity*item.price,0)
  return (
    <div>
      <Flex w="80%"margin={"auto"}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        </Box>
        <Box margin="auto">
            <Heading>Chick Wings Payment Gateway</Heading>
            <Box marginTop="50px">
            <FormControl>
              <FormLabel>Credit/Debit/ATM Card</FormLabel>
              <Input type='number' placeholder='Enter your Card Number'/>
              <FormLabel>Validity</FormLabel>
              <Input type='date' placeholder="valid thru"/>
              <FormLabel>CVV</FormLabel>
              <Input type='number' placeholder='CVV'/>
              <Button type="submit" bg="#FB641B" onClick={()=>{alert("Payment Done")}}>Pay - Rs.{total}</Button>
              <FormHelperText>Add and secure your card as per RBI guidelines.</FormHelperText>
            </FormControl>
            </Box>
        </Box>       
      </Flex>
    </div>
  )
}

export default Checkout