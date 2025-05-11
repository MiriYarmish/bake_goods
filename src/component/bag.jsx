import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrders, delFromBag } from "../redux/dataActions";
import { useNavigate, useParams } from "react-router-dom";
import './bag.css';

export const Bag = () => {
    const p = useParams();
    const n = useNavigate();
    const curr = useSelector(u => u.dataU.currentUser);
    const dis = useDispatch();
    const bagP = useSelector(pro => pro.dataP.bag);

    const sum = () => {
        let s = 0;
        bagP.forEach(element => {
            s += element.price * element.count;
        });
        return s;
    }

    return (
        <div className='bag-container'>
            {bagP.length === 0 ? (
                <h1 className="font">No items in your bag 😥</h1>
            ) : (
                <>
                    {/* הצגת כל מוצר בסל */}
                    {bagP.map((p1) => (
                        <div key={p1.code} className="bag-item-card">
                            <img src={p1.img} alt={p1.name} className="bag-item-img" />
                            <div className="bag-item-info">
                                <div className="bag-item-name">{p1.name}</div>
                                <div className="bag-item-price">{p1.price * p1.count}₪</div>
                                <div className="bag-item-amount">Quantity: {p1.count}</div>
                            </div>
                            <div className="bag-item-actions">
                                <button
                                    className="plus"
                                    onClick={() => {
                                        dis({ type: "MORE", payload: p1.code });
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    className="minus"
                                    onClick={() => {
                                        dis({ type: "LESS", payload: p1.code });
                                    }}
                                >
                                    -
                                </button>
                                <button
                                    className="del"
                                    onClick={() => {
                                        dis(delFromBag(p1.code));
                                    }}
                                >
                                    Del
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* סה"כ ותשלום */}
                    <div className="total-container">Total: {sum()}₪</div>
                    <button
                        className="pay"
                        onClick={() => {
                            dis(addOrders(bagP, curr));
                            n("../../pay");
                        } 
                    }
                    >
                        Payment
                    </button>
                </>
            )}
        </div>
    );
};
