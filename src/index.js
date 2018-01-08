import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import qFlow from './QFlow'
import surveyForm from './SurveyForm'

import 'bootstrap/dist/css/bootstrap.css';
import TabContainer from './containers/TabContainer'

/*
 * index.js file creates the store for tracking the state of this form  
 */
const useLocalStorage = false

let qForm = {}

if(useLocalStorage){
	qForm = localStorage.getItem('formState') ? JSON.parse(localStorage.getItem('formState')) : qFlow()	
} else {
	qForm = qFlow()  //surveyForm()   
}
		
const store = createStore(reducer, qForm)

const rndr = () => ReactDOM.render(
  <Provider store={store}>
   <div>
    <TabContainer />
  	
   </div>
  </Provider>,
  document.getElementById('root')
)

//console.log("Main .....:" + JSON.stringify(qForm, ' '))

rndr()
store.subscribe(() => {
	//putting in local storage
	localStorage.setItem('formState', JSON.stringify(store.getState()))
	//console.log("State Change : " + JSON.stringify(store.getState(), ' '))
	rndr()
})

