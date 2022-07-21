import React from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/';

const api = axios.create({
  baseURL: url
});

class Users extends React.Component {
  state = {
    users: []
  }

  constructor() {
    super();
    this.getUsers();
  }
  
  getUsers = async () => {
    let data = await api.get('/users').then(({ data }) => data);
    this.setState({ users: data});
  }

  render() {
    return (
      <div className="page-content">
        {this.state.users.map(user => <h2 key={user.id}>{user.first_name} {user.last_name}</h2>)}
      </div>
    );
  }
}

export default Users;