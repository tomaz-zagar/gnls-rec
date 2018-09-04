import { Action } from '@ngrx/store';

export const UPLOAD_FILE  = '[Store] Upload';
export const CHANGE_COLOR  = '[Store] ChangeColor';
export const ESCHER_PATH_CLICK  = '[Store] EscherPathClick';

export class UploadFile implements Action {
  readonly type = UPLOAD_FILE;

  /// uses a constructor to send a payload with the action
  constructor(public payload: string) {}
}

export class ChangeColor implements Action {
    readonly type = CHANGE_COLOR;
}

export class EscherPathClick implements Action {
    readonly type = ESCHER_PATH_CLICK;
}

export type StateActionTypes = UploadFile | ChangeColor
  
