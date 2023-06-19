import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SchoolModel, UserModel } from 'src/app/models';
import { AdminService } from 'src/app/services/admin.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.scss'],
})
export class SchoolViewComponent implements OnInit {
  public school: SchoolModel;
  public principal: UserModel;

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    const schoolId = +this.route.snapshot.paramMap.get('id');

    this.schoolService.getSchool(schoolId).subscribe((school: SchoolModel) => {
      this.school = school;
      console.log(school);

      this.adminService.getPrincipalById(school.principalId).subscribe((principal) => {
        this.principal = principal;
        console.log(principal);
      });
    });
  }
}
