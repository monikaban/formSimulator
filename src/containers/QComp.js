import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'

import QNode from './QNode'

export class QComp extends Component {

  render() {
    const  root  = this.props
    return (
    <div> 
    { root.rootQuestions.map(qid => this.renderRootQ(qid)) }
    </div>
    )
  }
  
  renderRootQ = qid => {
    return ( 
    		<div key={qid}>
    		<QNode id={qid}/>
    		</div>
    )
  }
}


QComp.propTypes = {
		  root: PropTypes.object,
		  renderRootQ: PropTypes.func
	}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(QComp)
