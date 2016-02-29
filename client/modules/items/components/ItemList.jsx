import React from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import Item from '../containers/Item.js';
import ItemProgress from './ItemProgress.jsx';

const ItemList = ({items, percentage}) => (
  <Grid>
    <Row>
      <Col xs={12}   >
        <ItemProgress percentage={percentage} />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12}>
        <a href="/new"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
      </Col>
      {items.map(item => (
        <Item key={item._id} item={item} />
      ))}
    </Row>
  </Grid>
);

export default ItemList;
