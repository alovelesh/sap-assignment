/********** Angular Dependency **********/
import { Injectable } from '@angular/core';
/********** rxjs **********/
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader = new Subject<boolean>();

  getLoader = (): Observable<boolean> => {
    return this.loader.asObservable();
  }

  showLoader = (data: boolean) => {
    this.loader.next(data);
  }
}
