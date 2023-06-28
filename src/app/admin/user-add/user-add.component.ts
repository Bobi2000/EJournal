import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent {
  userForm = new FormGroup({
    name: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    roles: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
  });

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  public onUserCreate() {
    console.log({
      ...this.userForm.value,
      roles: this.userForm.value.roles.split(' '),
    });

    this.userService.postUser({
      ...this.userForm.value,
      roles: this.userForm.value.roles.split(' '),
    }).subscribe((user) => {
      this.router.navigate([`/admin/users-view/`]);
    })
    // this.schoolService
    //   .postSchoolClass({ ...this.classForm.value, schoolId: schoolId } as any)
    //   .subscribe((response: any) => {
    //     this.router.navigate([`/admin/school-view/${schoolId}`]);
    //   });
  }
}
