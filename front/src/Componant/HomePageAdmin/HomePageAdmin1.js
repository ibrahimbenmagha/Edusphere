import React, { useState } from 'react';
import './HomePageAdmin.css'
import MyLogo from "./../../Photos/LogoPrincip/logo2.png";
import RegisterForm from '../Forms/RegisterForm';
// import Monlogo2 from "./../../Photos/LogoPrincip/logo3.png";

import { MenuFoldOutlined,MenuUnfoldOutlined,LoadingOutlined,AppstoreAddOutlined,CheckOutlined,LogoutOutlined } from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;


const HomePageAdmin1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='HomePageAdmin1'>
      <Sider trigger={null} collapsible collapsed={collapsed} className='LayoutMenu'>
        <div className="demo-logo-vertical">
          <img src={MyLogo} alt="ÉDUSPHERE" id='logoLarg' />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <CheckOutlined />,
              label: 'confirmed Schools',
            },
            {
              key: '2',
              icon: <LoadingOutlined />,
              label: 'Pending Schools',
            },
            {
              key: '3',
              icon: <AppstoreAddOutlined />,
              label: 'Add School',
            },
            {
              key: '4',
              icon: <LogoutOutlined />,
              label: 'Logout',
            },
          ]}

        />

      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className='ContentHomePageAdmin'>

            {/* Content */}
          <div className='RegisterFormComponent'>
          <RegisterForm/>
          </div>

        </Content>
      </Layout>
    </Layout>
  );
};
export default HomePageAdmin1;
