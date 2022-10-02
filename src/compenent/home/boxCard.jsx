import BrouserCategories from "./catogorie"
import '../../App.css'
// import stlyles from "../comp.module.css"
import { Box ,Grid,GridItem} from "@chakra-ui/react"
import { Link } from "react-router-dom"
function BoxCard(){
    return(
        <Box  >
            <h1 style={{fontSize:"30px", fontFamily:"fantasy",marginTop:"100px",marginBottom:"40px"}}>BROWSE CATEGORIES</h1>
        <Grid templateColumns={{base:'repeat(1, 1fr)', md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap={6} w='100%'  >
      
  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
< Link to={"/menu"}> <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=20.85" alt="" srcset="" brouseName="HOTDEALS"  /></Link>
< Link to={"/menu"}> <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=20.85" alt="" srcset="" brouseName="CHICKEN BUCKETS" /></Link>

< Link to={"/menu"}> <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=20.85" alt="" srcset="" brouseName="HOT LAUNCHIES"/></Link>

  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
< Link to={"/menu"}>   <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=20.85" alt="" srcset="" brouseName="BOX MEALS"  /></Link>

  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
< Link to={"/menu"}>   <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=20.85" alt="" srcset="" brouseName="BURGGERS"  /></Link>

  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
< Link to={"/menu"}>   <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=20.85" alt="" srcset="" brouseName="BIRIYANI BUCKETS" /></Link>

  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}

  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
< Link to={"/menu"}>   <BrouserCategories src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT176.jpg?ver=20.85" alt="" srcset="" brouseName="DESSERTS" /></Link>

  {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
 < Link to={"/menu"}>  <BrouserCategories src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt="" srcset="" brouseName="View All Menu-->" /></Link>

</Grid>
      
        </  Box>
    )
}
export default BoxCard