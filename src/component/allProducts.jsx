import { useSelector } from "react-redux"
import { Product } from "./product"
import './allP.css'
export const AllProduct = () => {
  const allPro = useSelector(pro => pro.dataP.my_product)
  return <>

  <div id="container"> 
    {
      allPro.map(p =><Product product={p}></Product>)
    }
    </div>
  </>
}