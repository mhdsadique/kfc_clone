import React from "react"
import BoxCard from "./boxCard"
import BrouserCategories from "./catogorie"
import { Box,Image,Flex ,Container} from "@chakra-ui/react"
import style from "../comp.module.css"
import { Bottom, Bottom2 } from "./bottom"



function Home(){
    return (
        <>
        <div>
       <div style={{marginTop:"130px",}}>
           {/* <h3 >Home</h3> */}
           <img src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1535&fit=fill&fm=webp" alt="" srcset="" />
           {/* <img src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1535&fit=fill&fm=webp" alt="" srcset="" /> */}
       </div>
    <div  >
        <h1 style={{fontSize:"40px", fontFamily:"fantasy",padding:"20px 20px 20px 8%",marginTop:"40px",backgroundColor:"#f8f7f5"}}>WELCOME TO KFC!</h1>
        </div>
       <div>
        {/* <h1>BROWSE CATEGORIES</h1> #f8f7f5 */}
        {/* <div style={{width:"80%",margin:"auto",border:"1px solid red",height:"600px"}}> */}
        <Box  style={{width:"80%",margin:"auto",height:"auto"}}>
        <BoxCard/>
        </Box>
       {/* </div> */}
       {/* <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg" alt="No-Image" class="offersImageText-background"></img> */}
       </div>
       </div>
       <Bottom/>
       <Bottom2/>
       <div>


  </div>

       </>
      
    )   
   }

   export {Home}









