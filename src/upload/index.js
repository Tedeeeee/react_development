import { Divider, Form, Input, InputNumber, Button } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" alt="" />
            <span>이미지를 업로드해주세요</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          label={<div className="upload-label">판매자 명</div>}
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요" }]}
        >
          <InputNumber className="upload-price" defaultValue={0} size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개를 입력해주세요" }]}
        >
          <Input.TextArea
            id="product-description"
            size="large"
            showCount
            maxLength={300}
            placeholder="상품 소개를 작성해주세요"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
