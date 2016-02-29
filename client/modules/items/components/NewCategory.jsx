import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class NewCategory extends React.Component {

  constructor(){
    super();
     this.create=this.create.bind(this);
  }
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <a href="/categories"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Categories</a>
          <h1>Add Category</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="name" type="text" placeholder="Name" />
            <ButtonInput onClick={this.create} bsStyle="primary" type="submit" value="Add Category"/>
          </form>
        </Panel>
      </Col>
    )
  }

  create(e) {
    e.preventDefault();
    const {createCategory} = this.props;
    const {name} = this.refs;
    createCategory(name.getValue());
    name.getInputDOMNode().value = '';
  }
}

export default NewCategory;
