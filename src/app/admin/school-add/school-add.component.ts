import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModell } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.scss'],
})
export class SchoolAddComponent implements OnInit {
  schoolForm = new FormGroup({
    name: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null),
    principalId: new FormControl<number | null>(null),
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private schoolService: SchoolService
  ) {}

  public principals: UserModell[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: UserModell[]) => {
      this.principals = users.filter((user) =>
        user.roles.includes('PRINCIPAL')
      );
    });
  }

  public onSchoolCreate(): void {
    this.schoolService
      .postSchool(this.schoolForm.value as any)
      .subscribe((response: any) => {
        this.router.navigate([`/admin/school-view/${response.id}`]);
      });
  }
}
