import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolModel, UserModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public getPrincipalById(id: number) {
    return this.http.get<UserModel>(`v1/users/${id}`);
  }
}
