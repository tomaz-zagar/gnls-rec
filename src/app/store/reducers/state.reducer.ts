import * as StateActions from '../actions/state.actions';
import { State }         from '../models/state.model';

export type Action = StateActions.StateActionTypes;

/// Default app state
const defaultState: State = {
    file: null,
    jsonData: null,
    color: ''
}

/// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function stateReducer(state: State = defaultState, action: Action) {
    console.log(action.type, state)
    
    switch (action.type) {

    case StateActions.FILE_SELECTED:
        return newState(state, { file: action.payload });
    case StateActions.DATA_UPLOADED:
        return newState(state, { jsonData: action.payload });
	default:
		return state;
	}
}