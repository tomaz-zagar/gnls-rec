import * as StateActions from '../actions/state.actions';
import { State }         from '../models/state.model';

export type Action = StateActions.StateActionTypes;

/// Default app state
const defaultState: State = {
    jsonData: null,
    color: 'default',
    clickedPathText:"Select a segment ..."
}

/// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function stateReducer(state: State = defaultState, action: Action) {
    console.log(action.type, state)
    
    switch (action.type) {

    case StateActions.DATA_UPLOADED:
        return newState(state, {color:defaultState.color, clickedPathText:defaultState.clickedPathText, jsonData: action.payload });
    case StateActions.PATH_CLICKED:
        return newState(state, { clickedPathText: action.payload });
    case StateActions.CHANGE_COLOR:
        return newState(state, { color: action.payload==state.color?defaultState.color:action.payload });
	default:
		return state;
	}
}