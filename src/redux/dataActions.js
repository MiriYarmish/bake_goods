
export const addToBag = (Product) => {
    return { type:"ADDTOBAG", payload: Product }
  }
  export const delFromBag = (code) => {
    return { type:"DELFROMBAG", payload: code }
  }
  export const setCurr = (newCurr) => {
    return { type:"SETCURR", payload: newCurr }
  }
  export const addUser = (newU) => {
    return { type:"ADDU", payload: newU }
  }
  export const dalProduct = (code) => {
    return { type:"DELPRODUCT", payload: code }
  }
  export const addP = (newp) => {
    return { type:"ADDP", payload: newp }
  }
  export const addOrders = (b,c) => {
    return { type:"ADDORDERS", payload: b,c }
  }