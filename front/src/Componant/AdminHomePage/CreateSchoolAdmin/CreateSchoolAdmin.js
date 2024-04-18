import React, { useState, useEffect } from 'react';
import { Button, Cascader, Form, Input, Upload, Select, Modal, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import "./CreateSchoolAdmin.css";
const { confirm } = Modal;

const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
};




export default function  CreateSchool() {
  const [form] = Form.useForm();
  const [residences, setResidences] = useState([]);
  const [selectedResidence, setSelectedResidence] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getAllCitiesWithSectors');
      const data = response.data;
      const formattedData = data.map(city => ({
        value: city.name,
        label: city.name,
        children: city.sectors.map(sector => ({ value: sector.name, label: sector.name }))
      }));
      setResidences(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleResidenceChange = (value, selectedOptions) => {
    setSelectedResidence(selectedOptions);
  };



  
   const onFinish = async (values) => {
    const { residence, ...otherValues } = values;
    const [city, sector] = residence;
    const payload = {
      ...otherValues,
      city,
      sector
    };
    confirm({
      title: 'Are you sure you want to Create this school?',
      content: '',
      onOk: async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/CreateSchoolByAdmin', payload);
      message.success('School deleted successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error creating school:', error);
      message.error('Failed to create school');

    }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div>
      <h1>Create new School</h1>
      <div className='RegisterForm'>
        <Form
          className='form'
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['city', 'sector'],
            prefix: '212',
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            className='formItem'
            name="name"
            label="School Name"
            tooltip="What's your school name?"
            rules={[{ required: true, message: 'Please input the school name!', whitespace: true }]}
          >
            <Input className='label' />
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
        name="type"
        label="School type"
        rules={[
          {
            required: true,
            message: 'Please sthe school type!',
          },
        ]}
      >
        <Select className='label' placeholder="Select the school type">
          <Option value="Primary">Primary School</Option>
          <Option value="Secondry">Secondry School</Option>
          <Option value="Height">Height School</Option> 
          <Option value="Primary-Secondry">Primary-Secondry</Option>
          <Option value="Primary-Secondry-Height">Primary-Secondry-Height</Option>

        </Select>
      </Form.Item>
          <Form.Item
            className='formItem'
            name="residence"
            label="City/Sector"
            rules={[{ type: 'array', required: true, message: 'Please select your habitual residence!' }]}
          >
            <Cascader className='label' options={residences} onChange={handleResidenceChange} />
          </Form.Item>

          <div className='selectedResidence'>
            {selectedResidence && (
              <span>
                Selected Residence: {selectedResidence.map(option => option.label).join(' / ')}
              </span>
            )}
          </div>


          
<Form.Item className='formItem'
        name="School-Principal"
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
        name="School-Supervisor"
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

