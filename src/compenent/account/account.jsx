

import { useState } from "react"
// import { Bottom2 } from "./home/bottom"
import {Button,Input,} from "@chakra-ui/react"
import { Link } from "react-router-dom"
    function Account(){
     return(
        <div style={{width:"40%",margin:"auto", marginTop:"150px",display:"grid",alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h5 style={{textAlign:"center"}}>Sign In /Sign up</h5>
         <img style={{margin:"auto"}} src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg" alt="kfc" srcset="" />
        <h1 style={{fontSize:"25px",textAlign:"center"}}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h1>
        <Input variant='flushed' placeholder='phone number' />
        <p>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</p>
        <Link to={"/otp"}><Button display="flex" bg='black' color="white" margin="auto" size='md' maxW={200} >Sent Me a Code</Button></Link>
        <p style={{textAlign:"center"}}>or</p>
        <Button  size='lg'>Skip,Continue As Guest</Button>
        </div>
     )
    }
   export {Account}