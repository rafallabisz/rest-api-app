import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';
import UsersTable from './UsersTable';
import Header from './Header';
import Footer from './Footer';
import Avatar from '../images/image.jpg';

const API = 'https://reqres.in';

class App extends Component {

  state = {
    users: [],
    err: false,
    isLoading: false,
    addUserModal: false,
    editUserModal: false,
    value_id: "",
    value_firstName: "",
    value_lastName: ""
  }

  fetchUsers = async (path, option, id) => {
    await fetch(API + path, option, id)
      .then(response => {
        if (response.status === 204) return alert(`User of the number id ${id} has been deleted!`)
        if (response.ok && response.status !== 204) return response.json()
      })
      .then(json => {
        console.log(option.method, json);
        const { users, addUserModal } = this.state
        if (option.method === "GET") {
          this.setState({
            users: json.data,
            isLoading: true,
            err: false,
          })
        }
        else if (option.method === "POST") {
          const newUser = {
            id: Number(json.id),
            first_name: json.value_firstName,
            last_name: json.value_lastName,
            avatar: Avatar
          }
          this.setState({
            users: [...users, newUser],
            addUserModal: !addUserModal,
            isLoading: true,
            value_firstName: "",
            value_lastName: ""

          })
        }
        else if (option.method === "DELETE") {
          const users = [...this.state.users];
          const index = users.findIndex(user => user.id === id)
          users.splice(index, 1)
          this.setState({
            users
          })
        }
        else if (option.method === "PATCH") {
          const users = [...this.state.users];
          console.log("OK", json)
          const index = users.findIndex(user => user.id === Number(json.value_id))
          console.log(index)
          if (index !== -1) {
            users[index].first_name = json.value_firstName;
            users[index].last_name = json.value_lastName;
            this.setState({
              users,
              editUserModal: !this.state.editUserModal,
              value_firstName: "",
              value_lastName: "",
              value_id: ""
            })
          }
          else {
            alert("Id was not found!")
            this.setState({ value_id: "" })
          }
        }
      })
      .catch(error => {
        console.error(error)
        this.setState({
          err: true
        })
      })
  }

  addUser = () => {
    const { value_firstName, value_lastName } = this.state;
    if (!value_firstName || !value_lastName) return alert('Complete the data!')
    else {
      const path = '/api/users';
      const request = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          value_firstName,
          value_lastName
        })
      }
      this.fetchUsers(path, request)
    }
  }

  editUser = () => {
    const { value_firstName, value_lastName, value_id } = this.state;
    if (!value_firstName || !value_lastName || !value_id) return alert('Complete the data!')
    else {
      const path = `/api/users/${value_id}`;
      const request = {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          value_firstName,
          value_lastName,
          value_id
        })
      }
      this.fetchUsers(path, request)
    }
  }

  deleteUser = (id) => {
    const path = `/api/users/${id}`
    const request = {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        id
      })
    }
    this.fetchUsers(path, request, id)
  }

  handleAddUserModal = () => {
    this.setState(prevState => ({
      addUserModal: !prevState.addUserModal,
      value_firstName: "",
      value_lastName: ""
    }))
  }

  handleEditUserModal = () => {
    this.setState(prevState => ({
      editUserModal: !prevState.editUserModal,
      value_firstName: "",
      value_lastName: "",
      value_id: ""
    }))
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.fetchUsers("/api/users?per_page=5", {
      method: 'GET'
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <div className="container">
          <Button
            color="primary"
            onClick={this.handleAddUserModal}>
            Add User</Button>

          <main>
            <section className="panel">
              <AddUserModal
                state={this.state}
                handleAddUserModal={this.handleAddUserModal}
                handleInput={this.handleInput}
                addUser={this.addUser}
              />
              <UsersTable
                state={this.state}
                deleteUser={this.deleteUser}
                handleEditUserModal={this.handleEditUserModal}
              />

              <EditUserModal
                state={this.state}
                handleEditUserModal={this.handleEditUserModal}
                handleInput={this.handleInput}
                editUser={this.editUser}
              />

            </section>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
