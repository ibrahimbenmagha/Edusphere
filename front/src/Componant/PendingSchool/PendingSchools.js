import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const { Column, ColumnGroup } = Table;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('http://127.0.0.1:8000/api/getAllUnconfirmedSchools')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {console.error('Error fetching data:', error);}
      );}, []);

  return (
    <Table dataSource={data}>
       {/* <Column
        title="Logo"
        dataIndex="logo"
        key="logo"
        render={(logo) => (
          <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} />
        )}
      /> */}
      <ColumnGroup title="Name">
        <Column title="School Name" dataIndex="name" key="name" />
      </ColumnGroup>
      
      <Column title="id" dataIndex="id" key="id " hidden/>
      <Column title="Email" dataIndex="email" key="email"/>
      <Column title="Phone Number" dataIndex="phone" key="phone"/>
      <Column title="Type" dataIndex="type" key="type"/>
      <Column title="City" dataIndex="city" key="cities"/>
      <Column title="Secteur" dataIndex="sector" key="secteur"/>
      <Column title="School Principal" dataIndex="School-Principal" key="School_Principal" />
      <Column title="School Supervisor" dataIndex="School-Supervisor" key="School_Supervisor" />
      <Column
        title="Action"
        key="action"
        render={(record) => (
          <Space size="middle">
            <a>Confirm {record.name}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default App;
