import { Component, OnInit } from '@angular/core';
import { UserModell } from 'src/app/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  public users: UserModell[] = [];

  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  public deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(() => {
      location.reload();
    });
  }
}
