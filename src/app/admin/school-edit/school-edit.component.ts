import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SchoolModel, UserModell } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.scss'],
})
export class SchoolEditComponent {
  school: SchoolModel;
  principals: UserModell[] = [];

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const schoolId = +this.route.snapshot.paramMap.get('id');
    this.schoolService.getSchool(schoolId).subscribe((school) => {
      this.school = school;
    });

    this.userService.getAllUsers().subscribe((users: UserModell[]) => {
      this.principals = users.filter((user) =>
        user.roles.includes('PRINCIPAL')
      );
    });
  }

  saveChanges(): void {
    this.schoolService
      .editSchool(this.school)
      .subscribe((school: SchoolModel) => {
        this.school = school;
      });

    this.router.navigate([`/admin/school-view/${this.school.id}`]);
  }
}
