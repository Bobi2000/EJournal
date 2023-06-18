import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SchoolModel } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.scss'],
})
export class SchoolEditComponent {
  school: SchoolModel = {
    id: 0,
    name: '',
    address: '',
    principalId: 0
  };

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const schoolId = +this.route.snapshot.paramMap.get('id');
    this.schoolService.getSchool(schoolId).subscribe((school) => {
      this.school = school;
    });
  }

  saveChanges(): void {
    this.schoolService
      .editSchool(this.school)
      .subscribe((school: SchoolModel) => {
        this.school = school;
      });

    this.router.navigate(['/admin']);
  }
}
