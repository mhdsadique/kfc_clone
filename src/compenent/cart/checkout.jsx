import { AspectRatio, Box, Button, Flex, Grid } from "@chakra-ui/react"
import { Link } from "react-router-dom"

// import { Sumcheckout } from "./cart"
let  sum=0

var stordata= JSON.parse(localStorage.getItem("menudatas"))||[]
{
stordata.map((item)=>(<>{sum=sum+item.price}</>))
    
}
const alertfinish=()=>{
    alert("Order Successfull")
}
function Checkout(){
  
    return (
        <div style={{marginTop:"150px" ,}}>

             <div style={{margin:"auto",width:"80%"}} >
            <h1 style={{fontSize:"30px"}}>CHECKOUT</h1>
            <Box width="40%">
            <Flex gap={20}>
                <Flex gap={10}>
                <h1>PICK UP INFO</h1>

                {/* <AspectRatio ratio={0}> */}
  {/* <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
  /> */}
{/* </AspectRatio> */}
<Box>
KFC Kerala- Perinthalmanna
KFC Outlet,Ground floor,Hilton Tower,Near Bye pass junctin,Calicut Road,Perinthalmanna </Box>
</Flex>
<Box  >
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
           <Link to={"/"}><Button onClick={alertfinish} colorScheme='red' size='lg' height='48px' width='200px' rightIcon={Math.floor(sum+((sum*5)/100))} >ContinuePayment</Button></Link> 
            </Grid>
           </Box> 
</Flex>
            </Box>
            
            </div>
        </div>
    )
}
export default Checkout