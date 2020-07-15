import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';

import { Api } from './api';

import { ISearchResponse, IUserResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  search = new Api<ISearchResponse>(this.http, this.apiUrl + '/search');
  users = new Api<IUserResponse>(this.http, this.apiUrl + '/users/:user');
  items = new Api<IUserResponse>(this.http, this.apiUrl + '/items/:id');
}
