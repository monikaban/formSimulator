import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux'

export class SFormHeader extends Component {

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
    const  header  = this.props
    return (
      <div>
      		{this.state.formName} ({this.state.formShortCode})
      </div>
    )
  }
}

SFormHeader.propTypes = {
		  header: PropTypes.object
	}

function mapStateToProps(state) {
  return state.header
}

export default connect(mapStateToProps, actions)(SFormHeader)
