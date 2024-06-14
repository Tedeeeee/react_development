import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://2ef4932e-fd8b-4a66-a9f5-82871785a395.mock.pstmn.io/products/${id}`
      )
      .then(function (response) {
        console.log(response);
        setProduct(response.data);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  if (!product) {
    return <h1>상품을 가져오는 중입니다</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt="" />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
