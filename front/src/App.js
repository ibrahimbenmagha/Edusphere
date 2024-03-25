import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyLogo from "./Photos/LogoPrincip/logo2.png";
import RegisterForm from './Componant/Forms/RegisterForm';
import PendingSchools from './Componant/PendingSchool/PendingSchools';

import { MenuFoldOutlined, MenuUnfoldOutlined, LoadingOutlined, AppstoreAddOutlined, CheckOutlined, LogoutOutlined } from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;


export default function HomePageAdmin1() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout className='HomePageAdmin1'>
        <Sider trigger={null} collapsible collapsed={collapsed} className='LayoutMenu'>
          <div className="demo-logo-vertical">
            <Link to="/Admin/ConfirmedSchools" className="demo-logo-vertical"><img src={MyLogo} alt="ÉDUSPHERE" id='logoLarg' /></Link>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<CheckOutlined />} >
              <Link to="/Admin/ConfirmedSchools" className="ConfirmedSchools">Confirmed Schools</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LoadingOutlined />} >
              <Link to="/Admin/PendingSchools">Pending Schools</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreAddOutlined />} >
              <Link to="/Admin/CreateSchool" className='CreateSchool'>Add School</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />} >
              <Link to="/Admin/Logout">Logout</Link>
            </Menu.Item>
          </Menu>

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
            <div className='RegisterFormComponent'>
              <Routes>
                <Route path='/Admin/CreateSchool' element={<RegisterForm />} />
                <Route path='/Admin/PendingSchools' element={<PendingSchools />} />

              </Routes>
            </div>

          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
   
  );
};
