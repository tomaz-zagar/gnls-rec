import { Action } from '@ngrx/store';

export const CHANGE_COLOR  = '[State] ChangeColor';
export const DATA_UPLOADED  = '[State] DataUploaded';

export class DataUploaded implements Action {
    readonly type = DATA_UPLOADED;
    constructor(public payload: any) {}
}

export class ChangeColor implements Action {
    readonly type = CHANGE_COLOR;
    constructor(public payload: string) {}
}

export type StateActionTypes = ChangeColor | DataUploaded
  
