
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'
export const UPDATE_FIELD = 'UPDATE_FIELD'

export const addChild = (nodeId) => ({
  type: ADD_CHILD,
  nodeId
})

export const removeChild = (parentId, nodeId) => ({
  type: REMOVE_CHILD,
  parentId,
  nodeId
})

export const updateField = (nodeId, qfld, text) => ({
  type: UPDATE_FIELD,
  nodeId,
  qfld,
  text
})




