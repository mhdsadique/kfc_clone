import { Box ,Image,Container,Grid,Flex, Center} from "@chakra-ui/react"
import {Link} from "react-router-dom"
function Bottom(){
   return (
    <>
<Container marginTop={"60px"} color={"white"} maxW='100%' display={"grid"} alignItems={"Center"} backgroundColor="black" height="500px">
<h1 style={{fontSize:"30px",paddingLeft:"10%"}}>OFFERS & DEALS</h1>
<Flex gap={10} >

       <Box paddingLeft={"10%"} >
<Image  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" alt="offer"/>     
<h1>1 PC FREE VEG</h1>
<p>1pc free chicken zinger on a cart value of 399 or above</p>
</Box>
<Box>
<Image  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" alt="offer"/>     
<h1>ADD 2 PC</h1>
<p>1pc free chicken zinger on a cart value of 399 or above</p>

</Box>

<Box>
<Image  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" alt="offer"/>     
<h1>2 PC FREE VEG</h1>
<p>1pc free chicken zinger on a cart value of 399 or above</p>

</Box>
<Box>
<Image  src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg" alt="offer"/>     
<h1>2 PC FREE VEG</h1>
<p>1pc free chicken zinger on a cart value of 399 or above</p>

</Box>
</Flex>

</Container>




    </>
   )
}




function Bottom2(){
    return(
        <Container  bg='black' h='300' maxW='100%'  color='white' paddingTop={100}>
        <Flex gap={10} justifyContent={"Center"} alignItems={"center"}>
      <Box  color='white'>
      <Image  src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"/>
    </Box>
    <Box  color='white' >
        <ul style={{listStyleType:"none"}}>
            <li > KFC Food</li>
            <li> <Link to="/menu">Menu</Link></li>
            <li> Order Lookup</li>
            <li> Gift Card</li>
            <li> Nutrition & AllergenPrivacy</li>
        </ul>
    </Box>
    <Box  color='white' >
        <ul style={{listStyleType:"none"}}>
            <li > Support</li>
            <li> Get Help</li>
            <li>Contact Us</li>
            <li> KFC FeedbackDisclaimer</li>
            <li>PolicyCaution Notice</li>
        </ul>
    </Box>
    <Box  color='white' >
        <ul style={{listStyleType:"none"}}>
            <li > KFC I ndia</li>
            <li> About KFC</li>
            <li>Careers</li>
            <li> KFC FeedbackDisclaimer</li>
            <li>Our Golden Past</li>
        </ul>
    </Box>
 
    <Box >
    <Flex gap={1}>
        <Image src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"></Image>
        <h5>Find a KFC</h5>
        </Flex>
    </Box>
   
    <Box>
       <a href="https://play.google.com/store/apps/details?id=com.yum.kfc"><Image src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"></Image></a> 
    </Box>
    <Box>
       <a href="https://apps.apple.com/in/app/kfc-india/id915824379"><Image src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"></Image></a> 
    </Box>
    </Flex>
    
      </Container>
    )
}
export {Bottom,Bottom2}