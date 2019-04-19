import React from 'react';
import { Row, Col } from 'reactstrap';

const Header = () => {
  return (
    <div className="container-fluid">
      <Row className="header text-center bg-warning">
        <Col className="header_col">Users Management</Col>
      </Row>
    </div>
  );
}

export default Header;