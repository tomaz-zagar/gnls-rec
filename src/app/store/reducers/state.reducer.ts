import * as StateActions from '../actions/state.actions';
import { State }         from '../models/state.model';

export type Action = StateActions.StateActionTypes;

/// Default app state
const defaultState: State = {
    jsonData: null,
    build: false,
    color: 'default'
}

/// Helper function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function stateReducer(state: State = defaultState, action: Action) {
    console.log(action.type, state)
    
    switch (action.type) {

    case StateActions.DATA_UPLOADED:
        return newState(state, { jsonData: action.payload, build: true });
    case StateActions.CHANGE_COLOR:
        return newState(state, { color: action.payload==state.color?defaultState.color:action.payload, build: false });
	default:
		return state;
	}
}