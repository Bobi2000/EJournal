import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModell, UserType } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss'],
})
export class UsersEditComponent implements OnInit {
  public user: any = {
    id: 0,
    name: '',
    email: '',
    roles: '',
  };

  availableRoles: string[] = Object.values(UserType);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id');

    this.userService.getUserById(userId).subscribe((curUser) => {
      this.user = curUser;
    });
  }

  saveChanges(): void {
    const roles: string = this.user.roles;
    this.user.roles = roles.split(' ');

    this.userService.postUser(this.user).subscribe((user: any) => {
      this.router.navigate([`/admin/users-view/`]);
    });
  }
}
