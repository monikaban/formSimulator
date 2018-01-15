import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input } from 'reactstrap';
import classnames from 'classnames';
import * as actions from '../actions'

export class SNode extends Component {

/**
 * the props object is spread and mapped to state object. Spreading is required for React to capture changes in the next level fields in 'questions'.
 */	
  state = {
		   ...this.props
		  }
	  
  componentWillReceiveProps(nextProps){
	  this.setState({ ...nextProps}) // sets the  props on the state  
  }
  /**
   * OnChange is required to see the changes made by the user while typing in input fields (when input 'value' attribute is used instead of 'defaultValue')
   */
  onChange = (param, e) => {
	  this.setState({...this.state,
		  			 [param] : e.target.value});
  }
  /**
   * This is the handler for onBlur event. Changed values are dispatched to the store using updateField() action.
   */
  handleDataChange = (param, e) => {
	 const { updateField,  parentId, id } = this.props
	 updateField(id, param, e.target.value)
}

  renderChild = childId => {
    const { id } = this.props
    return (
      <div key={childId}>
        <ConnectedSNode id={childId} parentId={id} />
      </div>
    )
  }

  render() {
    const { showThis, id, parentId, actions } = this.props
    
    let valField = "";
    let conditionCheck = "";
    if( this.props.respType == 'TEXT' ) { 
    	valField = <Row>
    				<Col sm="8"> <Input style= {{width: 20 + 'em'}} type="text" placeholder="" autoFocus="true" 
    					value={this.state.qResp} onChange={this.onChange.bind(this,"qResp")} onBlur={this.handleDataChange.bind(this,"qResp")} /></Col></Row>
    }
    if( this.props.respType == 'SELECT' ) { 
		valField= <Row><Col sm="4">
				      <Input type="select" name="select" id="respSelect" value={this.state.qResp}
				                 onChange={this.handleDataChange.bind(this,"qResp")}>
				    	{this.props.vals.map(val => <option value={val} key={val}>{val}</option>)}
				      </Input>
				  </Col></Row>
    }
    if( this.props.respType == 'RADIO' ) { 
		valField= <Row style= {{margin: 10 + 'px'}}>			     
			    {this.props.vals.map(val =>
			      <Col key={val} sm="auto">
				    <Input type="radio" key={val} name="respSelect" id={val} value={val}
				    	 onChange={this.handleDataChange.bind(this,"qResp")}/> <label>{val}</label>
				  </Col>
				)}    						     
			</Row>
    }
    
    if(!showThis) { return <p/>} 
    
    return (
    	<Row key={id}>
    	 {typeof parentId !== 'undefined' && <Col sm="1"></Col> }    	
	      <Col sm="11">
	      
			      <Row><Col> {this.state.qText} ({this.state.id})</Col></Row>
			      	{valField}
		    <Row><Col>&nbsp;</Col></Row>
	       {typeof this.props.childIds !== 'undefined' && this.props.childIds.map(this.renderChild)}
	       </Col>	  
      </Row>		      
    )
  }
}

/**
 * Map state object to properties. For the current ques Id, get all questions fields from the state and return as props.  
 */
function mapStateToProps(state, ownProps) {
	//console.log ("SNode ownProps:" + JSON.stringify(state.questions[ownProps.id]))
  return state.questions[ownProps.id]
}

const ConnectedSNode = connect(mapStateToProps, actions)(SNode)
export default ConnectedSNode
