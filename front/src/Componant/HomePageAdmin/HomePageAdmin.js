import React from 'react';
import Monlogo from "./../../Photos/LogoPrincip/logo2.png";
// import "./LoginForm.css"
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
const HomePageAdmin = () => {
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
        <Sider width={200}>
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} className='Menu-sider' items={items2}/>
        </Sider>
        <Layout style={{padding: '20px 24px 24px'}}>
       
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              // background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default HomePageAdmin;