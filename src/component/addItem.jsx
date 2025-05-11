import { useDispatch } from "react-redux"
import { Product } from "./product";
import { useSelector } from "react-redux";
import { addP, dalPtoduct } from "../redux/dataActions";
import { useState } from "react";
import { validCode, validName, validPrice, validdis } from "./validation";
import './css.css';

export const AddItem = () => {

    const dispatch = useDispatch();
    const allpro = useSelector((c) => c.dataP.my_product)

    const [error, setError] = useState({ code: '', name: '', discription: '', price: '' })
    const [p, setP] = useState({
        code:'',
        name:'',
        discription:'',
        price:''
    })
  
    return <>
  <div class="form-group">
    <label for="uname">prudect name:</label>
    <input type="text" class="form-control" id="uname" placeholder="Enter product name" name="uname" required  onChange={(e) => {
                setP({ ...p, name: e.target.value })
                setError({ ...error, name: validName(e.target.value) })
            }} ></input>
    <p style={{ color: "red" ,marginLeft:"200px"}}>{error.name}</p>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="number" class={error.code === '' ? "form-control" : "form-control error-control"} id="pwd" placeholder="Enter password" name="pswd"  onChange={(e) => {
                setP({ ...p, code: e.target.value })
                setError({ ...error, code: validCode(e.target.value, allpro) })
            }} required></input>
    <p style={{ color: "red",marginLeft:"200px" }}>{error.code}</p>
    </div>

    <div class="form-group">
    <label for="pwd">discription:</label>
    <input type="text" class="form-control" id="pwd" placeholder="Enter discription"  required  onChange={(e) => {
                setP({ ...p, discription: e.target.value })
                setError({ ...error, discription: validdis(e.target.value) })
            }}></input>
    <p style={{ color: "red",marginLeft:"200px" }}>{error.discription}</p>
</div>

    <div class="form-group">
    <label for="pwd">price:</label>
    <input type="number" class={error.price === '' ? "form-control" : "form-control error-control"} id="pwd" placeholder="Enter price"  required onChange={(e) => {
                setP({ ...p, price: e.target.value })
                setError({ ...error, price: validPrice(e.target.value) })
            }}></input>
    <p style={{ color: "red" ,marginLeft:"200px"}}>{error.price}</p>
   
  </div>


<button  class="btn btn-outline-success" onClick={(f) => {
            let x = true
            f.preventDefault();
            if (!p.name || !p.code || !p.discription || !p.price) {
                x = false;}
            Object.keys(error).forEach(key => {
                if (error[key] != '')
                    x = false
            })
            if (x == true)
                dispatch(addP(p))
        }} style={{marginLeft:"200px"}}>add</button>











    </>
}