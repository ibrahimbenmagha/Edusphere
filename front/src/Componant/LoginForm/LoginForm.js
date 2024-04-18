// Inside LoginForm.js

import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from 'react-router-dom';
import {setTokenAndRoleInLocalStorage,getUserFromLocalStorage, getTokenFromLocalStorage, getRoleFromLocalStorage, setCheckAdmin, getCheckAdmin, clearLocalStorage
} from '../../localStorageUtils'; 

export default function LoginForm() {

  useEffect(()=>{
    clearLocalStorage()

  })

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const onFinish = async (values) => {
    
    setLoading(true);
    try {
      const response = await axiosInstance.post("/login", values);
      const { authorisation: {token}, user, role } = response.data;
      setTokenAndRoleInLocalStorage(token, role, user);



      message.success("Logged in successfully");
      navigate("/AdminHomePage/home")
     
    } catch (error) {
      message.error("Invalid credentials");
    }
    setLoading(false);
  };

  useEffect(() => {
    const Token = getTokenFromLocalStorage(); 
    const Role = getRoleFromLocalStorage();
    const User = getUserFromLocalStorage();

    console.log(Role);
    

  }, []);



  return (
    <div>
      <h1>Login Form</h1>
      <Form
        name="login"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

}