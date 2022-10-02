import { Box, Button, Flex, Grid ,Image,} from "@chakra-ui/react"
import { Bottom2 } from "../home/bottom"
import {Link} from "react-router-dom"


var stordata= JSON.parse(localStorage.getItem("menudatas"))||[]
function  deletefunction(item,ind){
    stordata.splice(ind, 1)
    localStorage.setItem("menudatas",JSON.stringify(stordata))
    window.location.reload()
}
let  sum=0

{
stordata.map((item)=>(<>{sum=sum+item.price}</>))
    
}
function Cart(){
    // console.log(stordata)
    if(stordata.length===0){
    return (
     
       <div style={{marginTop:"100px"}}>
        
           <h1 style={{fontSize:"30px",marginLeft:"40px"}}>MY CART</h1>
            <br/>
            <Box   margin="auto" backgroundPosition=" right top" bgRepeat="no-repeat" width="80%" height="400px"  backgroundImage="url(https://online.kfc.co.in/static/media/empty_cart.32f17a45.png)">
                <h1 style={{fontSize:"40px"}}>YOUR CART IS EMPTY. LET'S START AN ORDER!</h1>
              <Link to={"/menu"}> <Button colorScheme='red' >Start Order</Button></Link> 
            </Box>
   
              <br/>
           <Bottom2/>
       </div>
    )
    }
    else{
        return(
            <Box  marginTop="150px" >
                <Flex justifyContent="space-around">
            <Box width="40%" >
   
               {
                    stordata.map((item,ind)=>(<div >
                      
                        <div key={item.id} style={{display:"flex",gap:"10px",padding:"10px",}} >
                        
                        <img src={item.imag} width="150px"/>
                        <Box>
                  <h4>{item.number}</h4> 
                  
                 
                   <h3 style={{paddingLeft:"40%"}}>&#8377;{item.price}</h3>
                  
                   <Button colorScheme='teal' variant='link' onClick={() => deletefunction(item,ind)}> Remove </Button>
                   </Box>
                  

                   {/* <Button onClick={() => addtocart(item)} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={<Image src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" />} >Add to Cart</Button> */}
                   
                   </div></div>)) 
                   
               }
              
            </Box>
          
            <Box >
                <Grid gap={10}>
            <Box>
                <h1 style={{fontSize:"30px"}}>ITEMS</h1>
          <Flex justifyContent="space-between">
                <p>Subtotal</p>
                <h5>&#8377;{Math.floor(sum)}</h5>
                </Flex>
            </Box>
            <Box >
            <Flex  justifyContent="space-between">
                <p>Gst</p>
            <h5>{Math.floor((sum*5)/100)}</h5>
            </Flex>
            </Box>
            {/* onClick={() => addtocart()} */}
           <Link to={"/checkout"}><Button  colorScheme='red' size='lg' height='48px' width='200px' rightIcon={Math.floor(sum+((sum*5)/100))} >Checkout</Button></Link> 
            </Grid>
           </Box>   
           </Flex>
          </Box>        
        )
       
    }  
}
// console.log(sum) 
//    localStorage.setItem("sum",JSON.stringify(sum))

   export {Cart}


