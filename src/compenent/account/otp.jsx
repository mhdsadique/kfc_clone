

import { useState } from "react"
// import { Bottom2 } from "./home/bottom"
import {Button,HStack,PinInputField,Input,PinInput, Container, VStack, Flex, Spacer} from "@chakra-ui/react"
import { Link } from "react-router-dom"

    function Otp(){
     return(
        <div style={{width:"40%",margin:"auto", marginTop:"150px",display:"grid",alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h5 style={{textAlign:"center"}}>Sign In /Sign up</h5>
        <h1 style={{textAlign:"center"}}>WE JUST TEXTED YOU</h1>
         <img style={{margin:"auto"}} src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg" alt="kfc" srcset="" />
        <h1 style={{fontSize:"25px",textAlign:"center"}}>Different Number</h1>
        {/* <Input variant='flushed' placeholder='phone number' /> */}
        <p> Resend code the Code</p>
        <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Spacer/>
      <Link to={"/"} ><Button display="flex"  borderRadius="25" bg='black' color="white" margin="auto" size='md' maxW={20} >Submit</Button></Link> 
        </div>
     )
    }
   export {Otp}