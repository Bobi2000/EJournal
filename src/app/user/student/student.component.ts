import { Component, OnInit } from '@angular/core';
import { MarksModel, StudentModel, UserModel, UserModell } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  currentStudent: StudentModel;
  userInfo: UserModell;
  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.studentService.getStudentById(Number(id)).subscribe((student) => {
      this.currentStudent = student;
      this.userService
        .getUserById(this.currentStudent.userId)
        .subscribe((user) => {
          this.userInfo = user;
        });
    });
    // mockMarks.forEach((data) => {
    //   if (data.student.id === this.currentStudent.user.id) {
    //     this.mockMarks.push(data);
    //   }
    // });
  }
}
