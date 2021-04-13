import React, { useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import {
  Layout,
  AutoComplete,
  Input,
  Carousel,
  Image,
  Typography,
  Button,
  Modal,
} from "antd";
import {
  MenuOutlined, SearchOutlined, ShoppingCartOutlined,
  UserOutlined, HomeFilled, GiftFilled, MailFilled,
  Rate, DeleteOutlined, LogoutOutlined
} from "@ant-design/icons";
import CategoryBox from "../../component/Checkbox/Checkbox";
import Card from "../../component/Card/Card";
import { useHistory, useLocation } from "react-router-dom"
import { cleanUserData } from "../../Redux/action"
import { useDispatch } from "react-redux";
const product = [
  {
    id: 1,
    image: "/assets/samsung2.jpg",
    price: 28000,
    productName: "Samsung Refrigator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "Samsung",
    rate: 5
  },
  {
    id: 2,
    image: "/assets/Lg3.jpeg",
    price: 22000,
    productName: "LG washing machine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "LG",
    rate: 4
  },
  {
    id: 3,
    image: "/assets/Lg1.jpeg",
    price: 18000,
    productName: "LG washing Machine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "LG",
    rate: 2
  },
  {
    id: 4,
    image: "/assets/haier1.jpeg",
    price: 12000,
    productName: "Haier Refrigator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "Haier",
    rate: 3
  },
  {
    id: 5,
    image: "/assets/whirphool3.jpeg",
    price: 12000,
    productName: "whirphool Refrigator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "whirphool",
    rate: 5
  },
  {
    id: 6,
    image: "/assets/whirphool2.jpeg",
    price: 8000,
    productName: "whirphool washing machine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "whirphool",
    rate: 5
  },
  {
    id: 7,
    image: "/assets/samsung3.jpg",
    price: 14000,
    productName: "Samsung Refrigator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "Samsung",
    rate: 5
  },
  {
    id: 8,
    image: "/assets/samsung4.jpg",
    price: 13000,
    productName: "Samsung washing machine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    brand: "Samsung",
    rate: 5
  },
]
const Dashboard = props => {
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography
  const history = useHistory()
  const [data, setData] = useState(product)
  const [search, setSearch] = useState("")
  const [brand, setBrand] = useState([])
  const [price, setPrice] = useState([])
  const [cart, setCart] = useState([])
  const [isModalVisible, setIsModalVisible] = useState('')
  const location = useLocation()
  const dispatch = useDispatch()
  const brandCategory = [
    {
      item: "Samsung",
    },
    {
      item: "LG",
    },
    {
      item: "whirphool",
    },
    {
      item: "Haier",
    },
  ];
  const priceCategory = [
    {
      item: "1000 to 9999",
    },
    {
      item: "9999 to 19999",
    },
    {
      item: "20000 to 29999",
    },
    {
      item: "30000 to 40000",
    },
  ];
  const searchFilter = (event) => {
    if (event.target.value == "") {
      setData(product);
    } else {
      const temp = product.filter((value) =>
        value.productName
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setData(temp);
    }
    setSearch(event.target.value);
  };
  const onChangeBrand = (value) => {
    if (value.length == 0) {
      setData(product);
    } else {
      let temp1 = [];
      value.map((item1) => {
        const temp = product.filter(
          (item) => item.brand.toLowerCase() == item1.toLowerCase()
        );
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      setData(temp1);
    }
    setBrand(value);
  }
  const onChangePrice = (value) => {
    if (value.length == 0) {
      setData(product);
    } else {
      let temp1 = [];
      value.map((item1) => {
        const x = item1.split(" ");
        const min = x[0];
        const max = x[2];
        const temp = product.filter(
          (item) => item.price <= max && item.price > min
        );
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      setData(temp1);
    }
    setPrice(value);
  }
  const addCart = (item) => {
    console.log("item========>", item)
    let temp = localStorage.getItem("cart")
    let cartItems = JSON.parse(temp)
    let newItems = [item]
    console.log("newItems", newItems)
    let temp2 = newItems.concat(cartItems?.filter((item) => newItems.indexOf(item) < 0))
    cartItems = temp2
    localStorage.setItem("cart", JSON.stringify(cartItems))
    setCart(cartItems)
  }
  const delToCart = (index) => {
    let temp = localStorage.getItem("cart")
    let cartItems = JSON.parse(temp)
    cartItems.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartItems))
    setCart(cartItems)
  };
  const Logout = async () => {
    var localStatus = await localStorage.removeItem('token')
    dispatch(cleanUserData())
    setTimeout(() => {
      history.push('/Login')
    }, 1000)
  }
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
      <div className="main">
        <Header className="header">
          <MenuOutlined className="menu_icon " />
          <Input.Group className="serachbar">
            <Input
              className="input"
              size="large"
              value={search}
              placeholder="Search product  Name..."
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              onChange={(event) => searchFilter(event)}
            />
          </Input.Group>
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div style={{ flexDirection: "row" }}>
              <Title level={3}>  {
                cart.map((item, index) => {
                  return (<div>
                    {/* <Image className="addTOCartImage">{item.image}</Image> */}
                    <h6>{item?.price}</h6>
                    <h6>{item?.productName}</h6>
                    <DeleteOutlined
                      onClick={() => delToCart(index)}
                      className="delete_Icon"
                    />
                  </div>)
                })
              }
              </Title>
            </div>
          </Modal>
          <h3>{location?.state?.email}</h3>
          {
            location?.state?.logged == "auth" &&
            <ShoppingCartOutlined onClick={showModal} className="menu_icon " />
          }
          <UserOutlined
            onClick={() => Logout()}
            className="menu_icon " />
        </Header>
        <Layout>
          <Sider className="sider ant-layout-sider">
            <HomeFilled className="icon  iconPosition" />
            <GiftFilled className="icon  iconPosition" />
            <MailFilled className="icon  iconPosition" />
          </Sider>
          <Content style={{ display: "flex" }}>
            <div className="categoryContent">
              <Title className="category" style={{ color: "green" }} level={3}>
                Category
              </Title>
              <Title className="category" style={{ color: "green" }} level={4}>
                Brand
              </Title>
              <CategoryBox
                onChange={(value) => onChangeBrand(value)}
                item1={brandCategory} />
              <Title className="category" style={{ color: "green" }} level={4}>
                Price
              </Title>
              <CategoryBox
                onChange={(value) => onChangePrice(value)}
                item1={priceCategory} />
            </div>
            <div className="productContent">
              <Carousel autoplay>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul1.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul2.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carasoul5.jpeg"}
                    width="100%"
                  />
                </div>
              </Carousel>
              <Content className="ContentCard">
                <Card
                  onClick={(item) => location?.state?.logged ? addCart(item) : history.push('/Login')}
                  product={data}
                />
              </Content>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
}
export default Dashboard;