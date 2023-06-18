import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard {

  constructor(private userStateService: UserService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.userStateService.isAuthenticated();

    if (isAuthenticated) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
