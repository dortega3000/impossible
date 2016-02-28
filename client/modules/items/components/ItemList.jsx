import React from 'react';
import Item from './Item.jsx';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({content = () => null }) => (
  <Row className="show-grid">
    <Col xs={12}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />      
    </Col>
  </Row>
);

export default ItemList;
