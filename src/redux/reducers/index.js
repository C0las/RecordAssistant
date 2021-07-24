import { combineReducers } from 'redux'
import { assistantReducer, selectedAssistantReducer } from './assistantReducer'

const reducers = combineReducers({
  allAssistants: assistantReducer,
  assistant: selectedAssistantReducer
})

export default reducers
