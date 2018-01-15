import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Row, Col, Input } from 'reactstrap';
import { bindActionCreators } from 'redux'

export class FormHeader extends Component {

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
  	     const { updateField } = this.props
		 updateField("headerFields", param, e.target.value)
	}
	handleAddRootQClick = e => {
		    e.preventDefault()
		    const { addChild } = this.props
		    addChild(-99)
		  }

  
  render() {
    const  header  = this.props
    return (
      <div style= {{margin: 20 + 'px'}}>
      <Row><Col sm="2">Form Name </Col><Col sm="4">  
      		<Input style= {{width: 20 + 'em'}} type="text" placeholder="Form name" autoFocus="true" 
			  	value={this.state.formName} 
      		    onChange={this.onChange.bind(this,"formName")}  onBlur={this.handleDataChange.bind(this,"formName")}/>
      	</Col>
      	<Col sm="2">Form Code </Col><Col sm="4"> 
      		<Input style= {{width: 10 + 'em'}} type="text" placeholder="Form name" 
      			value={this.state.formShortCode} 
      		    onChange={this.onChange.bind(this,"formShortCode")}  onBlur={this.handleDataChange.bind(this,"formShortCode")}/>
        </Col>
       </Row>
       <Row>
       <Col sm="3"><a href="#" // eslint-disable-line jsx-a11y/href-no-hash
	          onClick={this.handleAddRootQClick}  > Add Question </a>
	   </Col>

       </Row>
      </div>
    )
  }
}

FormHeader.propTypes = {
		  header: PropTypes.object
	}

function mapStateToProps(state) {
  return state.header
}

export default connect(mapStateToProps, actions)(FormHeader)
