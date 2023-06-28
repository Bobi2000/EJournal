import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';
import { StudentService } from 'src/app/user/student/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss'],
})
export class StudentAddComponent implements OnInit {
  studentForm = new FormGroup({
    userId: new FormControl<any>(null),
  });

  students: any[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private schoolService: SchoolService,
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: any[]) => {
      this.students = users.filter((user) => user.roles.includes('STUDENT'));
    });
  }

  public onStudentCreate() {
    const classId = +this.route.snapshot.paramMap.get('id');

    const selectedUser = this.students.filter(
      (user) => user.id == this.studentForm.value.userId
    )[0];

    this.studentService
      .postStudent({
        name: selectedUser.name,
        egn: '9900110011',
        schoolClassId: classId,
        userId: selectedUser.id,
      })
      .subscribe((res: any) => {
        this.router.navigate([`/admin/class-view/${classId}`]);
      });
  }
}
