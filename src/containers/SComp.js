import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'

import SNode from './SNode'

export class SComp extends Component {

	  state = {
		...this.props
		}
	  
	  componentWillReceiveProps(nextProps){
		  this.setState({ ...nextProps}) // sets the  props on the state
	  }
	  
  render() {
    const  {data}  = this.props
    return (
    <div> 
       { data.map(qid => this.renderRootQ(qid)) }      
    </div>
    )
  }
  
  renderRootQ = qid => {
    return ( 
    	<div>
    		<SNode id={qid}/>
    	</div>
    )
  }
}

SComp.propTypes = {
		  renderRootQ: PropTypes.func.isRequired
	}

function mapStateToProps(state) {
  return { data : state.rootQuestions }
}

export default connect(mapStateToProps)(SComp)
