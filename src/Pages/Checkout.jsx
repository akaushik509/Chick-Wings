import React,{useEffect,useState} from 'react'
import { Box,Heading,Grid,Image,Flex,Button, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input } from "@chakra-ui/react";

  //let sum=JSON.parse(localStorage.getItem("amount"))

function Checkout() {
  const [sum, setSum] = useState(0);
  async function GetData(){
    

    const url=`https://thawing-eyrie-70822.herokuapp.com/api/cart`;
    let res= await fetch(url);
    let data=await res.json(); 
    let dataCart=[];
    for(let i=0;i<data.length;i++){
        dataCart.push(data[i].price);
    }
    let sumCart = dataCart.reduce(function (x, y) {
        return x + y;
    }, 0);
    //localStorage.setItem("amount",JSON.stringify(sum));
    setSum(sumCart)
}

useEffect(() => {
  GetData();
}, []);

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
              <Button type="submit" bg="#FB641B" onClick={()=>{alert("Payment Done")}}>Pay - Rs.{sum}</Button>
              <FormHelperText>Add and secure your card as per RBI guidelines.</FormHelperText>
            </FormControl>
            </Box>
        </Box>       
      </Flex>
    </div>
  )
}

export default Checkout