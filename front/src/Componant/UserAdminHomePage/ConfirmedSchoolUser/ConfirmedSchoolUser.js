import React, { useState, useEffect } from 'react';
import { Space, Table, Modal, message, Button } from 'antd';
import axios from 'axios';

const { Column, ColumnGroup } = Table;
const { confirm } = Modal;






export default function  ConfirmedSchoolUser () {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getAllConfirmedSchools');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = (record) => {
    confirm({
      title: 'Are you sure you want to delete this school?',
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/deleteSchool/${record.id}`);
          message.success('School deleted successfully');
          fetchData(); 
        } catch (error) {
          console.error('Error deleting school:', error);
          message.error('Failed to delete school');
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };


  return (
    <div>
      <h1>Pending Schools</h1>
      <Table dataSource={data}>
        {/* Columns definition */}
        <ColumnGroup title="Name">
          <Column title="School Name" dataIndex="name" key="name" />
        </ColumnGroup>
        <Column title="Email" dataIndex="email" key="email"/>
        <Column title="Phone Number" dataIndex="phone" key="phone"/>
        <Column title="Type" dataIndex="type" key="type"/>
        <Column title="City" dataIndex="city" key="city"/>
        <Column title="Sector" dataIndex="sector" key="sector"/>
        <Column title="School Principal" dataIndex="School-Principal" key="School-Principal" />
        <Column title="School Supervisor" dataIndex="School-Supervisor" key="School-Supervisor" />
        <Column title="id" dataIndex="id" key="id" hidden/>
\        <Column
          title="Action"
          key="action"
          render={(record) => (
            <Space size="middle">
              <a onClick={() => handleDelete(record)}>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

