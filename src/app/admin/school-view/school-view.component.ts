import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SchoolModel, TermsModel, UserModel } from 'src/app/models';
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

  public schoolClasses: any;

  public id: number;

  public terms: any;

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    const schoolId = +this.route.snapshot.paramMap.get('id');
    this.id = schoolId;

    this.schoolService.getSchool(schoolId).subscribe((school: SchoolModel) => {
      this.school = school;

      this.adminService
        .getPrincipalById(school.principalId)
        .subscribe((principal) => {
          this.principal = principal;
        });
    });

    this.schoolService.getAllTerms().subscribe((terms) => {
      this.terms = terms;
    })

    this.schoolService.getAllSchoolClasses().subscribe((schoolClasses) => {
      const filteredSchoolClasses = schoolClasses.filter(
        (schoolClass) => schoolClass.schoolId === this.id
      );
console.log(filteredSchoolClasses);
      this.schoolClasses = filteredSchoolClasses;
    });
  }
}
