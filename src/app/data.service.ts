import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data:any;

  private dataSource = new BehaviorSubject(null);
  
  public subject=this.dataSource.asObservable();

  constructor() { }

  public set data(_data: any) {
    this._data=_data;
    this.dataSource.next(this._data);
  }
  
  public get data() {
		return this._data;
	}

}
