import { Component } from '@angular/core';
import { SubjectModel } from 'src/app/models';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjects-view',
  templateUrl: './subjects-view.component.html',
  styleUrls: ['./subjects-view.component.scss'],
})
export class SubjectsViewComponent {
  public subjects: SubjectModel[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe((subjects) => {
      this.subjects = subjects;
    });
  }

  public deleteSubject(id: number): void {
    this.subjectService.deleteSubject(id).subscribe(() => {
      location.reload();
    });
  }
}
