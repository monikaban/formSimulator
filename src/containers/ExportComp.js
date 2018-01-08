import React from 'react'
import { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import * as actions from '../actions'
import { Row, Col, Label, Input } from 'reactstrap';
//import { bindActionCreators } from 'redux'

export class ExportComp extends Component {

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
	  	  this.setState({ ...nextProps}) // sets the  props on the state
	   }

	  render() {

	    return (
	      <div>
		      <Row><Col >
		          <Label>Form JSON</Label>
		          <Input name="formJson" id="formJson" type="textarea" rows="25" value={JSON.stringify(this.state, null, 4)}/>
	          </Col></Row>
	      </div>
	    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ExportComp)
