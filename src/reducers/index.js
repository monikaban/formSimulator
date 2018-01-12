import {  ADD_CHILD, REMOVE_CHILD, UPDATE_FIELD } from '../actions'

const node = (state, action) => {
	
  console.log("node action:" + JSON.stringify(action));
 // console.log("node state:" + JSON.stringify(state));
  let stObject = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
  
    case ADD_CHILD:   	
       return addQue(action.nodeId, stObject) 
    	
    case REMOVE_CHILD:
    	
    	// Remove this childId from the parentId node 
    	if ( action.parentId != -99){
    		stObject.questions[action.parentId].childIds = stObject.questions[action.parentId].childIds.filter(id => id != action.nodeId)   
    	} else {
    		// this is root question, remove entry from root questions
    		stObject.rootQuestions = stObject.rootQuestions.filter(id => id != action.nodeId)       		
    	}
    		
    	// Remove the nodeId node and all its descendant nodes  
        const descendantIds = getAllDescendantIds(stObject, action.nodeId)
       
        stObject = deleteMany(stObject, [ action.nodeId, ...descendantIds ])        
        
        return stObject
      
    case UPDATE_FIELD: 	  
   	  if(action.nodeId == 'headerFields'){
           stObject.header[action.qfld] = action.text;
          return stObject;
      }
   	  
   	  if(action.qfld == 'vals') {
   		  stObject.questions[action.nodeId][action.qfld] = action.text.split(',');
   	  } else {
   		  stObject.questions[action.nodeId][action.qfld] = action.text;
   	  }
   	  if( action.qfld == 'qResp') {
   		 showHideQuestions(stObject, action.nodeId, action.text )   		
  	  }
      return stObject; 
    
    default:
      return state
  }
}

const getAllDescendantIds = (state, nodeId) => (
  state.questions[nodeId].childIds.reduce((acc, childId) => (
    [ ...acc, childId, ...getAllDescendantIds(state, childId) ]
  ), [])
)

const showHideQuestions = (stx, nodeId, qResp) => (
// get list of all immediate child Ids 
// go through each one of them
// evaluate operator and condition using qResp Value
// set showThis = true if condition is satisfied		
		stx.questions[nodeId].childIds.map((childId) => {
			
			const chQues = stx.questions[childId]
			chQues.showThis = false
			
			if (chQues.conditionOper == "equals" && chQues.conditionVal == qResp) {
				chQues.showThis = true
			}
			if (chQues.conditionOper == "gt" && chQues.conditionVal < qResp) {
				chQues.showThis = true
			}
			if (chQues.conditionOper == "lt" && chQues.conditionVal > qResp) {
				chQues.showThis = true
			}
			//console.log("Show Hide state:"+ JSON.stringify(chQues, '  '));
		})
)

const addQue = (parentQuesId, locState) => {
 	
		let childQuesId = locState.nextId++
		// Create an empty question object for childQuesId and add to the state
		let childQue =  { "id" : childQuesId.toString(),
		      "qText" : "",
		      "conditionOper" : "equals",
		      "conditionVal" : "Yes",
		      "respType" : "SELECT",
		      "help": "",
		      "defaultVal": "Yes",
		      "required": "yes",
		      "vals" : [], 
		      "showThis" : false,
		      "qResp" : "",
		      "childIds" : []
		    }			
		   
		let qs = {...locState.questions,
				[childQuesId.toString()] : childQue
			}
		locState = {...locState,
				questions : qs}

		// lookup question for parentQuesId. In its childIds, append childQuesId 
		if (parentQuesId != -99 ) {
			// adding a followup question
			locState.questions[parentQuesId].childIds.push(childQuesId);			
		} else {
			// adding root question
			locState.rootQuestions.push(childQuesId);
			// making sure root question is visible
			locState.questions[childQuesId].showThis = true;
		}
		return locState
}

const deleteMany = (state, ids) => {
  state = { ...state }
  ids.forEach(id => delete state.questions[id])
  return state
}

export default (state = {}, action) => {
  // keeping it if need to add any intercepter later on
  return node(state, action)
}
