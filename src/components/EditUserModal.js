import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label,Spinner } from 'reactstrap';

const EditUserModal = (props) => {
  const { editUserModal, value_firstName, value_lastName, value_id,isLoading } = props.state;
  return (
    <Modal
      isOpen={editUserModal}
      toggle={props.handleEditUserModal}>
      <ModalHeader
        toggle={props.handleEditUserModal}>
        User edition</ModalHeader>
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

        <FormGroup>
          <Label for="id">ID</Label>
          <Input
            id="id"
            name="value_id"
            type="number"
            maxLength="20"
            value={value_id}
            onChange={props.handleInput} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={props.editUser}>
          Edit User</Button>{' '}
        <Button
          color="secondary"
          onClick={props.handleEditUserModal}>
          Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditUserModal;