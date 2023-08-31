import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Button, Card, CardBody, Col, FormGroup, Input, Row} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as visibilityActions from '../../redux/actions/visibilityActions'
import * as adultActions from '../../redux/actions/adultActions'
import * as childreenActions from '../../redux/actions/childreenActions'
import * as roomActions from '../../redux/actions/roomActions'

class RoomSelectBox extends Component {
  
  render() {
    return (
      <div>
                <FormGroup>
                  <Input style={{textAlign:'center'}} readOnly type="text" onClick={()=>this.props.actions.changeVisibility()} name="room" id="room" placeholder={(this.props.adultCount!=null?this.props.adultCount:'') + ' adult - ' + (this.props.childreenCount!=null?this.props.childreenCount:'') + ' children - ' + (this.props.roomCount!=null?this.props.roomCount:'') + ' room'}/>
                </FormGroup>
           <Card style={{visibility:this.props.visibility,position:"absolute",zIndex:"10",width:"300px"}} className='mt-2' id='roomConfig'>
             <CardBody>
                <Row>
                  <Col xs='6'>Adults</Col>
                  <Col xs='6' style={{border:'1px #6c757d solid'}}>
                    <Row style={{height:'30px'}}>
                      <Col xs='4' className='action' onClick={()=>this.props.actions.increaseAdultCount()}>+</Col>
                      <Col xs='4'>{this.props.adultCount}</Col>
                      <Col xs='4' className='action' onClick={()=>this.props.actions.decreaseAdultCount()}>-</Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col xs='6'>Children</Col>
                  <Col xs='6' style={{border:'1px #6c757d solid'}}>
                    <Row style={{height:'30px'}}>
                      <Col xs='4'  className='action' onClick={()=>this.props.actions.increaseChildreenCount()}>+</Col>
                      <Col xs='4'>{this.props.childreenCount}</Col>
                      <Col xs='4' className='action' onClick={()=>this.props.actions.decreaseChildreenCount()}>-</Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col xs='6'>Rooms</Col>
                  <Col xs='6' style={{border:'1px #6c757d solid'}}>
                    <Row style={{height:'30px'}}>
                      <Col xs='4' className='action' onClick={()=>this.props.actions.increaseRoomCount()}>+</Col>
                      <Col xs='4'>{this.props.roomCount}</Col>
                      <Col xs='4' className='action' onClick={()=>this.props.actions.decreaseRoomCount()}>-</Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                <Button outline className='mt-2' block color='primary' onClick={()=>this.props.actions.changeVisibility()}>Done</Button>
                </Row>
             </CardBody>
           </Card>
      </div>
    )
  }
}
function mapStateToProps(state) {
    return {
        visibility:state.visibilityReducer,
        adultCount:state.adultReducer,
        childreenCount:state.childreenReducer,
        roomCount:state.roomReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions:{
            changeVisibility:bindActionCreators(visibilityActions.changeVisibility,dispatch),
            increaseAdultCount:bindActionCreators(adultActions.increaseAdultCount,dispatch),
            decreaseAdultCount:bindActionCreators(adultActions.decreaseAdultCount,dispatch),
            increaseChildreenCount:bindActionCreators(childreenActions.increaseChildreenCount,dispatch),
            decreaseChildreenCount:bindActionCreators(childreenActions.decreaseChildreenCount,dispatch),
            increaseRoomCount:bindActionCreators(roomActions.increaseRoomCount,dispatch),
            decreaseRoomCount:bindActionCreators(roomActions.decreaseRoomCount,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RoomSelectBox)