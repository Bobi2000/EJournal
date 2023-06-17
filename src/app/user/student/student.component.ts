import { Component, Input, OnInit } from '@angular/core';
import { MarksModel, StudentModel } from '../../models';
import {
  mockClasses,
  mockMarks,
  mockStudents,
  mockUsers,
} from '../../mocks.model';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  currentStudent: StudentModel = {
    id: 1,
    egn: '0147236956',
    class: mockClasses[0],
    user: mockUsers[0],
  };
  mockMarks: MarksModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.studentService.getStudentById(Number(id));
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
