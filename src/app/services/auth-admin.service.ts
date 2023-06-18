import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard {

  constructor(private userStateService: UserService, private router: Router) {}

  canActivate(): boolean {
    const isAdmin = this.userStateService.isAdmin();

    if (!isAdmin) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
