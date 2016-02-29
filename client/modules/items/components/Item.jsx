import React from 'react';
import { Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';
import moment from 'moment';


class Item extends React.Component {

  constructor(){
    super();
    this.markComplete=this.markComplete.bind(this);
  }

  render() {
    const {item} = this.props;
    const currentDate = new Date();
    const style = item.due < currentDate ? {'border': 'solid 1px red'} : {'border':'solid 1px #e3e3e3'};

    return (
      <Col xs={12} sm={6} md={4} lg={3} >
        <Panel style={style}>
          <Row>
            <Col xs={10}>
              <h2>{item.name}</h2>
            </Col>
            <Col xs={2}>
              <a href={`/edit/${item._id}`}><Glyphicon glyph="pencil"></Glyphicon></a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>{item.description} {item.due ? '- ' + moment(Number(item.due)).format("MM/DD/YYYY") : ''}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Input ref="complete" type="checkbox" label="Complete?" onChange={this.markComplete} checked={item.complete}/>
            </Col>
          </Row>
        </Panel>
      </Col>
    )
  }

  markComplete() {
    const complete = this.refs.complete.getChecked();
    const id = this.props.item._id;
    this.props.markComplete(id,complete);
  }
}

export default Item;
