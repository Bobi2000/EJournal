import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private userStateService: UserService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.userStateService.isAuthenticated();
console.log('test')
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
