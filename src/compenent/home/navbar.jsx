import { Link } from "react-router-dom"

import styles from "../comp.module.css"
const flag=false
function Navbars(){
  var stordata= JSON.parse(localStorage.getItem("menudatas"))||[]
  let sum=0
return(
    <div style={{backgroundColor:"white",display:"flex" ,justifyContent:"space-around" ,width:"100%",padding:"25px",position:"fixed",left:"0px",top:"0px"}}>
      {/* {
      Links.map((link)=><Link key={link.path} to={link.path}>{link.title}</Link> )
      } */}

        <div style={{display:"flex" ,justifyContent:"flex-start" ,width:"20%",gap:"20px",alignItems:"center",textDecoration:"none"}}>
      <Link   to={"/"}><img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"></img> </Link>
      <Link className={styles.navbar}  to={"/menu"}>Menu</Link>
      <Link className={styles.navbar}  to={"/deals"}>Deals</Link>
      </div>
      <div style={{display:"flex" ,justifyContent:"flex-end",width:"20%",gap:"20px",alignItems:"center"}}>
      <Link to={"/account"}><img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"></img></Link>

  <Link className={styles.navbar}  to={"/account"}>Account</Link>
 
      <Link to={"/Cart"}><img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" style={{width:"50px"}}></img> </Link>
    
      </div>

      
    </div>
)

}
export {Navbars}