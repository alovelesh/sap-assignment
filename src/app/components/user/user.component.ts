/********** Angular Dependency **********/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/********** rxjs **********/
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
/********** Services **********/
import { ApiService } from './../../services/api/api.service';
/********** Models **********/
import { IUserResponse } from './../../services/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<IUserResponse>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.apiService.users.getRemove(null, {}, {
          user: params.get('name')
        });
      })
    );
  }

}
