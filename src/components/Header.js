import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const Header = ({ handleAddUserModal, alertDeletedUser }) => {
  return (
    <>
      <div className="container-fluid">
        <Row className="header text-center bg-warning">
          <Col className="header_col">Users Management</Col>
        </Row>
      </div>
      <div className="header-wrap container">
        <Button
          color="primary"
          onClick={handleAddUserModal}>
          Add User</Button>
        {alertDeletedUser && <div className="alert-deleted-user">
          User has been deleted!
        </div>}
      </div>
    </>
  );
}

export default Header;