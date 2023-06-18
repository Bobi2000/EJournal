import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockSchool } from 'src/app/mocks.model';
import { SchoolModel } from 'src/app/models';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.scss'],
})
export class SchoolEditComponent {
  school: SchoolModel;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const schoolId = +this.route.snapshot.paramMap.get('id');
    console.log(schoolId);
    this.school = this.getSchoolById(schoolId);
    console.log(this.school);
  }

  private getSchoolById(id: number): SchoolModel {
    return mockSchool.find((school) => school.id === id);
  }

  saveChanges(): void {
    console.log('Saving changes:', this.school);

    mockSchool.map((school) => {
      if (school.id === school.id) {
        return this.school;
      }
      return school;
    });

    this.router.navigate(['/admin']);
  }
}
