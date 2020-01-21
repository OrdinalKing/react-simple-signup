import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  data: any;
  private dataSource = new BehaviorSubject(this.data);
  currentData = this.dataSource.asObservable();
  constructor() {}

  changeData(data: any) {
    this.dataSource.next(data);
  }
}
