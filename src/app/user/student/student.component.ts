import { Component, OnInit } from '@angular/core';
import { MarksModel, StudentModel } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { mockMarks, mockStudents } from '../../mocks.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  currentStudent: StudentModel;
  mockMarks: MarksModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.studentService.getStudentById(Number(id)).subscribe((student) => {
    //   this.currentStudent = student;
    // });
    mockStudents.forEach((data) => {
      if (data.id === Number(id)) {
        this.currentStudent = data;
      }
    });
    mockMarks.forEach((data) => {
      if (data.student.id === this.currentStudent.user.id) {
        this.mockMarks.push(data);
      }
    });
  }
}
