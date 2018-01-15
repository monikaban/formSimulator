import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Input } from 'reactstrap';
import classnames from 'classnames';
import * as actions from '../actions'

export class QNode extends Component {

/**
 * the props object is spread and mapped to state object. Spreading is required for React to capture changes in the next level fields in 'questions'.
 */	
  state = {
           ...this.props
          }
/**
 * Set the state to the latest properties being passed to QNode. This is called during initial load and whenever user updates any input field 
 */	  
  componentWillReceiveProps(nextProps){
	 // console.log("componentWillReceiveProps..new....:" + JSON.stringify(nextProps,'  '));
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
	// console.log("QNode : handleDataChange : new:" + e.target.value + "  param:" + param)
	 const { updateField,  parentId, id } = this.props

	 updateField(id, param, e.target.value)
}
    
  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }

  handleAddChildClick = e => {
    e.preventDefault()
    const { addChild, id } = this.props
    addChild(id)
  }

  handleRemoveClick = e => {
    e.preventDefault()
    const { removeChild, parentId, id } = this.props
    removeChild(parentId || -99 , id)
  }

  renderChild = childId => {
    const { id } = this.props
    return (
      <div key={childId}>
        <ConnectedQNode id={childId} parentId={id} />
      </div>
    )
  }

  render() {
    const { showThis, id, parentId, actions } = this.props 
  //  console.log("QNode......:" + this.props.qText + " JSON= " + JSON.stringify(this.props,'  '));
    
    let valField = "";
    let conditionCheck = "";
    if( this.props.respType != 'TEXT' ) { 
    	valField = <Row>
    			     <Col>Values for response :</Col>
    			     <Col sm="9"> <Input style= {{width: 20 + 'em'}} type="text" placeholder="For select enter comma separated list"
    					   value={this.state.vals} onChange={this.onChange.bind(this,"vals")} onBlur={this.handleDataChange.bind(this,"vals")} /></Col></Row>
    }

    return (
    	
    	<Row key={id}>
	      {typeof parentId !== 'undefined' && <Col sm="1"></Col> }
	      <Col sm="11">
		      <Card body>
			      {typeof  parentId !== 'undefined' &&
				   	  <Row><Col sm="8">Show this when, "{this.state.parentQ}" response </Col>		      	
				   	  	<Col sm="2">
					      <Input type="select" name="condSelect" id="condSelect" value={this.state.conditionOper}
					                 onChange={this.handleDataChange.bind(this,"conditionOper")}>
					    	<option value="equals" key="equals">equals</option>
					    	<option value="lt" key="lt">less than</option>
					    	<option value="gt" key="gt">greater than</option>
					      </Input>
					    </Col>
				      	<Col sm="2"> <Input style= {{width: 5 + 'em'}} type="text" placeholder="responsevalue" value={this.state.conditionVal} 
				      		onChange={this.onChange.bind(this,"conditionVal")}  onBlur={this.handleDataChange.bind(this,"conditionVal")}/></Col>		      	
			      	  </Row>
			         }
			      {typeof  parentId !== 'undefined' && 
			    	  <hr style={{ color: 'blue' }} /> 
			      }
			      
			      <Row><Col >Question  ({this.state.id}) </Col><Col sm="9">
			      		  <Input style= {{width: 30 + 'em'}} type="text" placeholder="Enter Question" name="q1"
			      			   value={this.state.qText} onChange={this.onChange.bind(this,"qText")} onBlur={this.handleDataChange.bind(this,"qText")} // on focus out
			      		   /></Col></Row>
			      		   
			      <Row><Col sm="3">Response Type </Col><Col sm="2">
				      <Input type="select" name="select" id="exampleSelect" defaultValue={this.props.respType}
				                   onChange={this.handleDataChange.bind(this,"respType")}>
		 		        <option value="TEXT" key="TEXT">TEXT</option>
		 		        <option value="SELECT" key="SELECT">SELECT</option>
		 		        <option value="RADIO" key="RADIO">RADIO</option>		          
		 		       </Input>
			      	</Col></Row>
			      	{valField}
			      <Row>
			      	<Col sm="3"><a href="#" // eslint-disable-line jsx-a11y/href-no-hash
			          onClick={this.handleAddChildClick}  > Add Followup Question </a>
			        </Col>
			       
			        	<Col sm="2">	<a href="#" onClick={this.handleRemoveClick} 
			             style={{ color: 'gray', textDecoration: 'none' }}>
			              Remove </a>
			            </Col>
			         
			      </Row>
		       </Card>
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

	let myQues = state.questions[ownProps.id]
	const pid = ownProps.parentId || -99
	if (pid != -99) {
		myQues = {...myQues, parentQ : state.questions[pid].qText	}
	}
	//console.log ("QNode ownProps:" + JSON.stringify(myQues))
  return myQues
}

const ConnectedQNode = connect(mapStateToProps, actions)(QNode)
export default ConnectedQNode

