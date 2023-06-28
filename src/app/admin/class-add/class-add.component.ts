import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss'],
})
export class ClassAddComponent {
  classForm = new FormGroup({
    name: new FormControl<string | null>(null),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) {}

  public onClassCreate() {
    const schoolId = +this.route.snapshot.paramMap.get('id');

    this.schoolService
      .postSchoolClass({ ...this.classForm.value, schoolId: schoolId } as any)
      .subscribe((response: any) => {
        this.router.navigate([`/admin/school-view/${schoolId}`]);
      });
  }
}
