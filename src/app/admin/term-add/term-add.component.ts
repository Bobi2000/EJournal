import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-term-add',
  templateUrl: './term-add.component.html',
  styleUrls: ['./term-add.component.scss'],
})
export class TermAddComponent implements OnInit {
  termForm = new FormGroup({
    name: new FormControl<string | null>(null),
    abbreviation: new FormControl<string | null>(null),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {}

  public onTermCreate() {
    const schoolId = +this.route.snapshot.paramMap.get('id');

    this.schoolService
      .postTerm(this.termForm.value as any)
      .subscribe((term) => {
        this.router.navigate([`/admin/school-view/${schoolId}`]);
      });
  }
}
