import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  updateGraph = new Subject();
  private localStorageKeyName = 'localPostData';

  constructor() { }

  deletePost(id: string): Observable<any> {
    return new Observable(observer => {
      this.updateData(id, 'isHide', true, observer);
    });
  }

  upvotePost(id: string, points): Observable<any> {
    return new Observable(observer => {
      this.updateData(id, 'points', points + 1, observer);
    });
  }

  private updateData(id, key, value, observer) {
    if (localStorage[this.localStorageKeyName]) {
      try {
        const obj = JSON.parse(localStorage[this.localStorageKeyName]);
        if (obj[id]) {
          obj[id][key] = value;
        } else {
          obj[id] = {
            [key]: value
          };
        }
        this.setLocalStorage(this.localStorageKeyName, obj);
      }
      catch (err) {
        observer.error(err);
      }
    } else {
      this.setLocalStorage(this.localStorageKeyName, {
        [id]: {
          [key]: value
        }
      });
    }
    observer.next(value);
  }

  getLocalPostData() {
    let ob = {};
    try {
      const data = localStorage[this.localStorageKeyName];
      if (data) {
        ob = JSON.parse(data);
      }
      return ob;
    }
    catch (err) {
      return ob;
    }
  }

  setLocalStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
  }
}
