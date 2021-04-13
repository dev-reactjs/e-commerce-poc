import React, { useState } from "react";
import "./../Card/Card.css";
import {
	Image,
	Button,
	Rate,
	Modal,
	Descriptions,
} from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons";
const Card = ({ product, onClick }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const showModal = () => {
		setIsModalVisible(true);
	};
	const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<>
			{product.map((item, id) => {
				return (
					<div
						style={{ borderWidth: 2, borderColor: "black" }}
						className="card"
					>
						<Image style={{ height: "100%", width: "100%" }} src={item.image} />
						<Modal
							visible={isModalVisible}
							onOk={handleOk}
							onCancel={handleCancel}
						>
							<div className="modal">
								<Descriptions
									style={{ textAlign: "center" }}
									title="Product Information"
								>
									<div style={{ flexDirection: "column" }}>
										<h5 className="description">{item.description}</h5>
										<h3 className="productname" style={{ color: "blue" }}>
											${item.price}/price
                  </h3>
									</div>
								</Descriptions>
							</div>
						</Modal>
						<h3 onClick={showModal} className="productname">{item.productName}</h3>
						<h3 className="productname" style={{ color: "blue" }}>
							${item.price}/price{" "}
							<Button onClick={() => onClick(item)} className="cart_btn">
								<ShoppingCartOutlined />
							</Button>
						</h3>
						<p className="description">{item.description}</p>
						<Rate className="description" style={{ fontSize: 15 }} allowHalf defaultValue={item.rate} />
					</div>
				)
			})
			}
		</>
	);
};
export default Card;