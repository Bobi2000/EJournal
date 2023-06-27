import { Component, Input, OnInit } from '@angular/core';
import { MarksModel, StudentModel, UserModel, UserModell } from '../../models';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @Input() currentParent: UserModell;
  parent: UserModell;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getStudentsParent(Number(id)).subscribe((parent) => {
      console.log(parent);
      this.parent = parent[0];
    });
    // mockStudentParents.find((dataStudent) => {
    //   if (dataStudent.parent.id === this.currentParent.id) {
    //     this.children.push(dataStudent.student);
    //     // mockMarks.forEach((dataMarks) => {
    //     //   if (dataStudent.student.id === dataMarks.student.id) {
    //     //     this.mockMarks.push(dataMarks);
    //     //   }
    //     // });
    //   }
    // });
  }
}
