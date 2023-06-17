import { Component, Input, OnInit } from '@angular/core';
import { MarksModel, StudentModel, UserModel } from '../../models';
import { mockMarks, mockStudentParents } from '../../mocks.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @Input() currentParent: UserModel;
  children: StudentModel[] = [];
  mockMarks: MarksModel[] = [];

  constructor() {}

  ngOnInit() {
    mockStudentParents.find((dataStudent) => {
      if (dataStudent.parent.id === this.currentParent.id) {
        this.children.push(dataStudent.student);
        mockMarks.forEach((dataMarks) => {
          if (dataStudent.student.id === dataMarks.student.id) {
            this.mockMarks.push(dataMarks);
          }
        });
      }
    });
  }
}
