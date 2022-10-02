
import { Routes ,Route} from "react-router-dom";
import { Account } from "./account/account";
import { Otp } from "./account/otp";
import { Cart } from "./cart/cart";
import Checkout from "./cart/checkout";
import { Deals } from "./deals/deals";
import { Home } from "./home/home";
import { Menu } from "./menu/menu";



function AllRootes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/deals" element={<Deals/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/otp" element={<Otp/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>

    )
}
export default AllRootes




