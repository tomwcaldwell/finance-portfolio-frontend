import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/';

const api = axios.create({
  baseURL: url
});

const Users = () => {

  api.get('/users').then(res => {
    console.log(res.data);
  });
  
  return (
    <div className="page-content">
      
    </div>
  );
}

export default Users;