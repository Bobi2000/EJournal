import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor() {
    const storedUserState = localStorage.getItem('userState');
    const initialState = storedUserState ? JSON.parse(storedUserState) : null;
    this.userSubject.next(initialState);
  }

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
