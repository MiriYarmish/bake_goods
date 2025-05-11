import { Routes,Route} from "react-router-dom"
import { AddItem } from "../component/addItem"
import { Home } from "../component/home"
import { AllProduct } from "../component/allProducts"
import { MoreDetails } from "../component/moreDetails"
import { Bag } from "../component/bag"
import { Login } from "../component/login"
import { SignUp } from "../component/signUp"
import { Orders } from "../component/orders"
import { Pay } from "../component/pay"

export const MyRouting=()=>{
    return<>
    <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="allP" element={<AllProduct></AllProduct>}></Route>
        <Route path="moreD/:code" element={<MoreDetails></MoreDetails>}></Route>
        <Route path="bag" element={<Bag></Bag>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="sighIn" element={<SignUp></SignUp>}></Route>
        <Route path="addI" element={<AddItem></AddItem>}></Route>
        <Route path="order" element={<Orders></Orders>}></Route>
        <Route path="pay" element={<Pay></Pay>}></Route>
    </Routes>
    
    
    </>
}