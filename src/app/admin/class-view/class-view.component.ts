import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { terms } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss'],
})
export class ClassViewComponent implements OnInit {
  public schoolClass: any;
  public id: any;
  public terms: any;
  public mark: any = 6;
  public marksMap: { [studentId: number]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    const classId = +this.route.snapshot.paramMap.get('id');
    this.id = classId;
    this.schoolService.getSchoolClass(classId).subscribe((curClass) => {
      this.schoolClass = curClass;
    });

    if (classId === terms[0].id) {
      this.terms = terms;
    }
  }

  public onMark(id: number) {
    this.marksMap[id] = this.mark;
  }
}
