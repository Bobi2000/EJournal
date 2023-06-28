import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { terms } from 'src/app/models';
import { SchoolService } from 'src/app/services/school.service';
import { UserService } from 'src/app/services/user.service';
import { StudentService } from 'src/app/user/student/student.service';

@Component({
  selector: 'app-subject-add-term',
  templateUrl: './subject-add-term.component.html',
  styleUrls: ['./subject-add-term.component.scss']
})
export class SubjectAddTermComponent {
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
    this.userService.gettAllSubjects().subscribe((users: any[]) => {
      this.students = users;
    });
  }

  public onStudentCreate() {
    const classId = +this.route.snapshot.paramMap.get('id');

    const selectedUser = this.students.filter(
      (user) => user.id == this.studentForm.value.userId
    )[0];

    terms.filter((term) => term.classId === classId)[0].subjects.push({subject: selectedUser.name});
    this.router.navigate([`/admin/class-view/${classId}`]);
  }
}
