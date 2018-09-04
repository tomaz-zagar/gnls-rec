import { Action } from '@ngrx/store';

export const FILE_SELECTED  = '[State] FileSelected';
export const CHANGE_COLOR  = '[State] ChangeColor';
export const ESCHER_PATH_CLICK  = '[State] EscherPathClick';
export const DATA_UPLOADED  = '[State] DataUploaded';

export class FileSelected implements Action {
  readonly type = FILE_SELECTED;

  /// uses a constructor to send a payload with the action
  constructor(public payload: File) {}
}

export class DataUploaded implements Action {
    readonly type = DATA_UPLOADED;
    constructor(public payload: any) {}
}

export class ChangeColor implements Action {
    readonly type = CHANGE_COLOR;
}

export class EscherPathClick implements Action {
    readonly type = ESCHER_PATH_CLICK;
}

export type StateActionTypes = FileSelected | ChangeColor | EscherPathClick | DataUploaded
  