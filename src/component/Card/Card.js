import React from "react";
import "./../Card/Card.css";
import {
	Image,
	Button,
	Rate,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const Card = ({ item1, onClick }) => {
	return (
		<>
			{item1.map((x, id) => {
				return (
					<div
						style={{ borderWidth: 2, borderColor: "black" }}
						className="card"
					>
						<Image style={{ height: "100%", width: "100%" }} src={x.image} />
						<h3 className="productname">{x.productName}</h3>
						<h3 className="productname" style={{ color: "blue" }}>
							${x.price}/price{" "}
							<Button onClick={() => onClick(x)} className="cart_btn">
								<ShoppingCartOutlined />
							</Button>
						</h3>
						<p className="description">{x.description}</p>
						<Rate className="description" style={{ fontSize: 15 }} allowHalf defaultValue={x.rate} />
					</div>
				)
			})
			}
		</>
	);
};
export default Card;