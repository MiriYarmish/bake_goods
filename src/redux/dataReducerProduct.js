import { produce } from 'immer'

const Product = {
  my_product: [
    {
      code: '3456',
      name: 'babka',
      discription: 'chocklet, yummy!',
      img: '../תמונות לפרוייקט/babka.jpg',
      price: 45
    },
    {
      code: '2345',
      name: 'cinnoman bun',
      discription: 'diletios!!!!!',
      img: '../תמונות לפרוייקט/cinnamon buns.jpg',
      price: 50
    },
    {
      code: '1256',
      name: 'apple cake',
      discription: 'perfuct for rosh hashana!',
      img: '../תמונות לפרוייקט/apple cake.jpg',
      price: 120
    },
    {
      code: '2536',
      name: 'babka bites',
      discription: 'amaizing!!!!!',
      img: '../תמונות לפרוייקט/babka bites.jpg',
      price: 60
    },
    {
      code: '3568',
      name: 'chiffon cake',
      discription: 'soooo good!!!!',
      img: '../תמונות לפרוייקט/chiffon cake.jpg',
      price: 150
    },
    {
      code: '6893',
      name: 'hunny cup cakes',
      discription: 'perfuct for rosh hashana!',
      img: '../תמונות לפרוייקט/hunny cup cakes.jpg',
      price: 70
    }
  ],
  bag: []
}

export const dataReducerProduct = produce((state, action) => {
  switch (action.type) {
    case "ADDTOBAG":
      {
        const n = { ...action.payload, count: 1 }
        const index = state.bag.findIndex(p => p.code == action.payload.code)
        if (index == -1) {
          state.bag.push(n)
        }
        else
          state.bag[index].count = state.bag[index].count + 1
        alert ("added successfully 😁😎👀✔")
        break;
      }
    case "LESS":
      {
        const index = state.bag.findIndex(p => p.code == action.payload)
        const mone = state.bag[index].count
        if (mone > 1)
          state.bag[index].count = mone - 1
        else
          state.bag = state.bag.filter(f => f.code !== action.payload)

        break;
      }
    case "MORE":
      {

        const index = state.bag.findIndex(p => p.code == action.payload)
        const mone = state.bag[index].count
        state.bag[index].count = mone + 1
        break;
      }
    case "DELFROMBAG":
      {
        state.bag = state.bag.filter(f => f.code !== action.payload)
        break;
      }
    case "DELPRODUCT":
      {
        state.my_product = state.my_product.filter((f) => f.code !== action.payload)
        break;
      }
    case "ADDP":
      {
        state.my_product.push(action.payload)
        alert("added succesfully" + action.payload.name)
        break;
      }
    default:
      break
  };
}, Product)

