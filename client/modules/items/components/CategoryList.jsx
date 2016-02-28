import React from 'react';
import {Col, Row, Panel, Glyphicon} from 'react-bootstrap'

const CategoryList = ({categories}) => (
	<div>
		<Row>
			<Col xs={12}>
				<a href="/categories/new"><Glyphicon glyph="plus"></Glyphicon>New Category</a>
			</Col>
		</Row>
		{categories.map(category => (
			<Col xs={12} sm={6} md={4} lg={3} key={category._id}>
				<Panel>
					<h2>{category.name}</h2>
				</Panel>
			</Col>
		))}
	</div>
);

export default CategoryList;