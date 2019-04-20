import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';
import UsersTable from './UsersTable';
import Header from './Header';
import Footer from './Footer';
import Avatar from '../images/image.jpg';
import ErrorPage from './ErrorPage';

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
    value_lastName: "",
    alertDeletedUser: false
  }

  fetchUsers = async (path, option, id) => {
    this.setState({ isLoading: true })
    await fetch(API + path, option, id)
      .then(response => {
        if (response.status === 204) return this.handleAlertDelete()
        if (response.ok) return response.json()
      })
      .then(json => {
        const { users, addUserModal, editUserModal } = this.state
        if (option.method === "GET") {
          this.setState({
            users: json.data,
            isLoading: false
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
            isLoading: false,
            value_firstName: "",
            value_lastName: ""

          })
        }
        else if (option.method === "DELETE") {
          const users = [...this.state.users];
          const index = users.findIndex(user => user.id === id)
          users.splice(index, 1)
          this.setState({
            users,
            isLoading: false
          })
        }
        else if (option.method === "PATCH") {
          const users = [...this.state.users];
          const index = users.findIndex(user => user.id === Number(json.value_id))
          if (index !== -1) {
            users[index].first_name = json.value_firstName;
            users[index].last_name = json.value_lastName;
            this.setState({
              users,
              editUserModal: !editUserModal,
              value_firstName: "",
              value_lastName: "",
              value_id: "",
              isLoading: false
            })
          }
          else {
            alert("Id was not found!")
            this.setState({
              value_id: "",
              isLoading: false
            })
          }
        }
      })
      .catch(error => {
        console.error(error)
        this.setState({
          err: true,
          isLoading: false
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

  handleAlertDelete = () => {
    this.setState({ alertDeletedUser: true });
    setTimeout(() => this.setState({ alertDeletedUser: false }), 2000);
  }

  componentDidMount() {
    this.fetchUsers("/api/users?per_page=5", {
      method: 'GET'
    })
  }

  render() {

    return (
      <div className="app">
        <header>
          <Header
            handleAddUserModal={this.handleAddUserModal}
            alertDeletedUser={this.state.alertDeletedUser}
          />
        </header>

        <div className="container container-panel">
          <main>
            <section className="panel">
              {this.state.err && <ErrorPage />}
              {this.state.isLoading && <Spinner color='primary' className='spinner' />}

              <AddUserModal
                state={this.state}
                handleAddUserModal={this.handleAddUserModal}
                handleInput={this.handleInput}
                addUser={this.addUser}
              />
              {!this.state.err && <UsersTable
                state={this.state}
                deleteUser={this.deleteUser}
                handleEditUserModal={this.handleEditUserModal}
              />}

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
