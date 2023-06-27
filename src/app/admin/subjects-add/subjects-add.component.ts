import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjects-add',
  templateUrl: './subjects-add.component.html',
  styleUrls: ['./subjects-add.component.scss'],
})
export class SubjectsAddComponent implements OnInit {
  schoolForm = new FormGroup({
    name: new FormControl<string | null>(null),
    abbreviation: new FormControl<string | null>(null),
  });

  constructor(private router: Router, private subjectService: SubjectService) {}

  ngOnInit(): void {}

  public onSubjectCreate(): void {
    this.subjectService
      .postSubject(this.schoolForm.value as any)
      .subscribe((response: any) => {
        this.router.navigate([`/admin/subjects-view`]);
      });
  }
}
