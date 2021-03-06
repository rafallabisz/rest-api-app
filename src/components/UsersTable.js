import React from 'react';
import { Table, Button } from 'reactstrap';

const UsersTable = (props) => {
  const users = props.state.users.map(user => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td><img src={user.avatar} alt="avatar" className="image" /></td>
      <td className="size-letter">{user.first_name.toLowerCase()}</td>
      <td className="size-letter">{user.last_name.toLowerCase()}</td>
      <td>
        <Button
          color="success"
          size="sm"
          className="mr-2"
          onClick={() => props.handleEditUserModal()}>
          Edit
          </Button>
        <Button
          color="danger"
          size="sm"
          onClick={() => props.deleteUser(user.id)}>
          Delete
         </Button>
      </td>
    </tr>
  ))

  return (
      <div className="table-responsive">
        <Table className="table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users}
          </tbody>
        </Table>
      </div>
  );
}

export default UsersTable;