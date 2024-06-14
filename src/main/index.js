import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPageComponent() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        `https://2ef4932e-fd8b-4a66-a9f5-82871785a395.mock.pstmn.io/products`
      )
      .then(function (response) {
        const products = response.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" alt="" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/product/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt="" />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <span className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt=""
                    />
                    <span>{product.seller}</span>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPageComponent;
