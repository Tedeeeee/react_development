import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}번째 상품 상세 페이지</h1>
    </div>
  );
}

export default ProductPage;
