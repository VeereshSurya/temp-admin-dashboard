import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserQueryParams } from '../models/user-query-params.model';
import { BaseResponse } from '../../shared/models/response-model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:7212/api/User/';

  constructor(private http: HttpClient) {}

  getUsers(params: UserQueryParams): Observable<BaseResponse> {
    let queryParams = new HttpParams();
    for (const [key, val] of Object.entries(params)) {
      if (val !== undefined) {
        queryParams = queryParams.set(key, val.toString());
      }
    }

    return this.http.get<BaseResponse>(this.apiUrl, { params: queryParams });
  }

  createUser(user: User) {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(username: string, user: User) {
    return this.http.put(`${this.apiUrl}/${username}`, user);
  }

  deleteUser(username: string) {
    return this.http.delete(`${this.apiUrl}/${username}`);
  }
}
