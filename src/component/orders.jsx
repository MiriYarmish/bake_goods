import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delFromBag } from "../redux/dataActions";
import { useParams } from "react-router-dom";
import './order.css';

export const Orders = () => {
    const p = useParams();
    const curr = useSelector(u => u.dataU.currentUser);
    const dis = useDispatch();
    const bagP = useSelector(pro => pro.dataP.bag);

    const sum = () => {
        let s = 0;
        bagP.forEach(element => {
            s += element.price * element.count;
        });
        return s;
    };

    return (
        <div className="orders-container">
            {bagP.length > 0 ? (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bagP.map((p1) => (
                                <tr key={p1.code}>
                                    <td>{p1.code}</td>
                                    <td>{p1.name}</td>
                                    <td>{p1.description}</td>
                                    <td>
                                        <img src={p1.img} alt={p1.name} />
                                    </td>
                                    <td>{p1.price * p1.count} ₪</td>
                                    <td>{p1.count}</td>
                                    <td>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="font">Total: {sum()} ₪</div>
                    <h1>הוזמן בהצלחה</h1>
                </>
            ) : (
                <h2>No products in your order.</h2>
            )}
        </div>
    );
};
