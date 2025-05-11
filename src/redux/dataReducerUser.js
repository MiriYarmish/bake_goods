import { produce } from 'immer'
import { useNavigate } from 'react-router-dom';
const Users = {
    my_users:
        [
            {
                name: 'miri',
                pass: '1234',
                email: 'miriyarmish@gmail.com',
                orders: []
            },
            {
                name: 'leah',
                pass: '1111',
                email: 'leahyarmish4824@gmail.com',
                orders: []
            },
            {
                name: 'tzivi',
                pass: '2222',
                email: 'tziviyarmishhh@gmail.com',
                orders: []
            }
        ],
    currentUser: "אורח",
    manager: { name: 'estee', pass: '9883' }
}

export const dataReducerUser = produce((state, action) => {
    switch (action.type) {
        case "SETCURR":
            {
                state.currentUser = action.payload
                break;
            }
        case "ADDU":
            {
                state.my_users.push(action.payload)
                alert("added succesfully" + action.payload.name)
                break;
            }
        case "ADDORDERS":
            {
                const index = state.my_users.findIndex(p => p.name == state.currentUser)
                if (index != -1) {
                    state.my_users[index].orders.push(action.payload)
                }
                break;
            }
        default: break
    }

}, Users)