import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { mockUsers } from '../mocks.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public isInvalidLogin = false;

  constructor(private router: Router, private user: UserService) {}

  onLogin() {
    var curUser = mockUsers.filter((user) => {
      if (user.email === this.loginForm.value.email) {
        return user;
      }

      return null;
    })[0];

    if (!curUser) {
      this.isInvalidLogin = true;
      return;
    }

    this.user.setUserState(curUser);

    this.router.navigate([`/user/${curUser.id}`]);
  }
}
