import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

class EditItem extends React.Component {

  constructor(){
    super();
    this.edit=this.edit.bind(this);
  }

  render() {
    const {item, error} = this.props;
  
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel >
          <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
          <h1>{item ? 'Edit' : 'Add'} Item</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="name" type="text" placeholder="Name" defaultValue={item ? item.name : ''}/>
            <Input ref="description" type="textarea" placeholder="Description" defaultValue={item ? item.description :''}/>
            <DateTimeField ref="due" inputFormat="MM/DD/Y" defaultText="" />
            <ButtonInput onClick={this.edit} bsStyle="primary" type="submit" value="Save Item"/>
          </form>
        </Panel>
      </Col>
    )
  }

  edit(e) {
    e.preventDefault();
    const {create,item} = this.props;
    const {name, description, due} = this.refs;
    if (item){
      this.props.editItem(item._id,name.getValue(), description.getValue());
    }
    else{
      this.props.createItem(name.getValue(), description.getValue(), due.getValue());
    }

    name.getInputDOMNode().value = '';
    description.getInputDOMNode().value = '';
  }
}

export default EditItem;
