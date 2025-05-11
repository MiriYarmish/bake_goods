import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToBag, dalProduct } from "../redux/dataActions";
import { useDispatch } from "react-redux";
import './moreD.css';
export const MoreDetails = () => {
  const allPro = useSelector(pro => pro.dataP.my_product);
  const p = useParams();
  const curr = useSelector(u => u.dataU.currentUser);
  const n = useNavigate();
  const product = allPro.find(pro => pro.code == p.code);
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>; // אם לא נמצא המוצר
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-info">
          <div className="product-code">Code: {product.code}</div>
          <div className="product-price">Price: {product.price}₪</div>
          <div className="product-description">{product.discription}</div>
        </div>

        <div className="product-image-container">
          <img src={product.img} alt={product.name} className="product-img" />
        </div>

        <div className="button-container">
          {curr === "estee" ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                alert("are you sure you want to del")
                dispatch(dalProduct(product.code));
                n('../../allP');
              }}
            >
              Delete Product
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                curr === 'אורח' ? n('../..//') : dispatch(addToBag(product));
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
