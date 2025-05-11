
import { useNavigate } from "react-router-dom";
import './product.css';

export const Product = ({ product }) => {
  const n = useNavigate();

  return (
    <div className="product-card">
      <div className="product-info">
        <div className="product-code font">Code: {product.code}</div>
        <div className="product-name font">{product.name}</div>
      </div>

      <div className="product-image-container">
        <img
          src={product.img}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-price font">₪ {product.price}</div>

      <button
        type="button"
        className="btn btn-light product-details-btn"
        onClick={() => n(`/moreD/${product.code}`)}
      >
        פרטים נוספים
      </button>
    </div>
  );
};



export const ProductList = ({ products }) => {
    return (
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.code} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>₪ {product.price}</p>
            <button className="product-details-btn">פרטים נוספים</button>
          </div>
        ))}
      </div>
    );
  };

  