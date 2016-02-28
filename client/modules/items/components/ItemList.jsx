import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

import Item from './Item.jsx';
import ItemProgress from './ItemProgress.jsx';

const ItemList = ({content = () => null }) => (
  <Row>
    <Row>
      <Col xs={10}  xsOffset={1} >
        <ItemProgress />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12}>
        <a href="/edit"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
      </Col>
      <Item />
      <Item />
      <Item />
      <Item />
    </Row>
  </Row>
);

export default ItemList;
