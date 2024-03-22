import React from 'react';
import Monlogo from "./../../Photos/LogoPrincip/logo2.png";
import "./LoginForm.css"
// import Login2 "./Login2.js";
import Login2 from "./Login2.js";
import { LaptopOutlined, NotificationOutlined, UserOutlined,AppstoreAddOutlined,CheckOutlined} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;
const items2 = [UserOutlined, AppstoreAddOutlined, CheckOutlined, UserOutlined].map((icon, index) => {
  const key =["Confirmed", "Inconfirmed", "Add School", "Logout"];
  return {
    icon: React.createElement(icon),
    label: key[index],
    
  };
});
const LoginFrom = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='App'>
      <Header className='Header'>
        
        
          <div className="navbar">
            <div className="logo">
              <img src={Monlogo} alt="ÉDUSPHERE" width={"290px"}/>
            </div>
          </div>

      </Header>
      <Layout>
        <Layout style={{padding: '20px 24px 24px'}}>
       
          <Content className='content-login-form'>
                <Login2/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LoginFrom;