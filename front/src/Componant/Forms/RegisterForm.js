import React, { useState } from 'react';
import {Button,Cascader,Form,Input,Upload,Select,} from 'antd';
import {UploadOutlined } from '@ant-design/icons';
import "./RegisterForm.css";

const { Option } = Select;
const residences = 
[
  {value: 'zhejiang',label: 'Zhejiang',children: [{value: 'hangzhou',label: 'Hangzhou'},],},
  {value: 'jiangsu',label: 'Jiangsu',children: [{value: 'nanjing',label: 'Nanjing'},],},
];
const formItemLayout = {labelCol: {xs: {span: 24,},sm: {span: 8,},},wrapperCol: {xs: {span: 24,},sm: {span: 16,},},};
const tailFormItemLayout = {wrapperCol: {xs: {span: 24,offset: 0,},sm: {span: 16,offset: 8,},},};
const RegisterForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  

  return (
      <div>
        <h1>Create new School</h1>
        
    <div className='RegisterForm'>

      
    <Form className='form'
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou'],
        prefix: '212',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >

        <Form.Item className='formItem'
        name="SchoolName"
        label="School Name"
        tooltip="What's your school name?"
        rules={[
          {
            required: true,
            message: 'Please input the school name!',
            whitespace: true,
          },
        ]}
      >
        <Input className='label'/>
      </Form.Item>

      <Form.Item className='formItem'
        name="email"
        label="E-mail"
        tooltip="What is the profetional email of tthis school?"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input the E-mail!',
          },
        ]}
      >
        <Input className='label'/>
      </Form.Item>

      <Form.Item className='formItem'
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input className='label'/>
      </Form.Item>

      <Form.Item className='formItem'
        name="SchoolType"
        label="School type"
        rules={[
          {
            required: true,
            message: 'Please sthe school type!',
          },
        ]}
      >
        <Select className='label' placeholder="Select the school type">
          <Option value="Primere">Primary School</Option>
          <Option value="Secondry">Secondry School</Option>
          <Option value="Height">Height School</Option>
          <Option value="Primary-Secondry">Primary-Secondry</Option>
          <Option value="Primary-Secondry-Height">Primary-Secondry-Height</Option>

        </Select>
      </Form.Item>


      <Form.Item className='formItem'
        name="residence"
        label="City/Sector"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Cascader className='label' options={residences} />
      </Form.Item>
    
      <Form.Item className='formItem'
        name="logo"
        label="Upload the logo"
        rules={[
          {
            required: true,
            message: 'Please upload the logo!',
          },
        ]}
      >
          <Upload className='label' name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined/>}>Click to upload</Button>
          </Upload>
      </Form.Item>

      <Form.Item className='formItem'
        name="schoolPrincipal"
        label="Principal Name"
        tooltip="What is the school principal name?"
        rules={[
          {
            required: true,
            message: 'Please input the school principal name?',
            whitespace: true,
          },
        ]}
      >
        <Input className='label'/>
      </Form.Item>

      <Form.Item className='formItem'
        name="Supervisor"
        label="Supervisor Name"
        tooltip="What is the sSupervisor name?"
        rules={[
          {
            required: true,
            message: 'Please input the Supervisor name?',
            whitespace: true,
          },
        ]}
      >
        <Input className='label'/>
      </Form.Item>

   
      <Form.Item className='formItem' {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};
export default RegisterForm;