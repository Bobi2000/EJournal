import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  StudentModel,
  TermsModel,
  TermsSubjectModel,
  UserModel,
} from '../models';
import { mockTermsSubject } from '../mocks.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    const storedUserState = localStorage.getItem('userState');
    const initialState = storedUserState ? JSON.parse(storedUserState) : null;
    this.userSubject.next(initialState);
  }

  getUserById(id: number): Observable<UserModel> {
    return this.httpClient.get<UserModel>('v1/users/' + id);
  }

  getAllTerms(): Observable<TermsModel[]> {
    return this.httpClient.get<TermsModel[]>('v1/terms');
  }

  // getAllSubjectsByTermId(): Observable<TermsModel> {
  //   return this.httpClient.get<TermsModel[]>('v1/terms');
  // }

  private saveUserState(userState: any): void {
    localStorage.setItem('userState', JSON.stringify(userState));
  }

  public getUserState(): any {
    return this.userSubject.value;
  }

  public setUserState(userState: any): void {
    this.userSubject.next(userState);
    this.saveUserState(userState);
  }

  public isAuthenticated(): boolean {
    const userState = this.getUserState();

    if (userState) {
      return true;
    }

    return false;
  }

  public isAdmin(): boolean {
    const userState = this.getUserState();

    if (userState['type'] === 'Admin') {
      return true;
    }

    return false;
  }

  public logout(): void {
    localStorage.removeItem('userState');
    this.userSubject.next(null);
  }
}
