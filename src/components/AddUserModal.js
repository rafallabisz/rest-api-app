import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Spinner } from 'reactstrap';

const AddUserModal = (props) => {
  const { addUserModal, value_firstName, value_lastName, isLoading } = props.state;

  return (
    <Modal
      isOpen={addUserModal}
      toggle={props.handleAddUserModal}>
      <ModalHeader
        toggle={props.handleAddUserModal}>
        Add a new user</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            id="firstName"
            name="value_firstName"
            maxLength="20"
            value={value_firstName}
            onChange={props.handleInput} />
        </FormGroup>
        {isLoading && <Spinner color='primary' className='spinner' />}
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="value_lastName"
            maxLength="20"
            value={value_lastName}
            onChange={props.handleInput} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={props.addUser}>
          Add User</Button>{' '}
        <Button
          color="secondary"
          onClick={props.handleAddUserModal}>
          Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddUserModal;