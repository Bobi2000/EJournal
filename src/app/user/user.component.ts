import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel, TermsModel, UserModell, UserType } from '../models';
import { UserService } from '../services/user.service';
import { mockUsers } from '../mocks.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  currentUser: UserModell;
  isStudent: boolean = false;
  isParent: boolean = false;
  isTeacher: boolean = false;
  isPrincipal: boolean = false;
  isAdmin: boolean = false;
  terms: TermsModel[] = [];
  children: StudentModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(Number(id)).subscribe((user) => {
      this.currentUser = user;
      this.currentUser.roles.forEach((role) => {
        this.isStudent = role === UserType.STUDENT;
        this.isParent = role === UserType.PARENT;
        this.isTeacher = role === UserType.TEACHER;
        this.isPrincipal = role === UserType.PRINCIPAL;
        this.isAdmin = role === UserType.ADMIN;
      });
      // if (this.isTeacher) {
      //   // this.userService.getAllSubjectsByTermId().subscribe((terms) => {
      //   // console.log();
      //   // terms.find((term) => {
      //   //   if (!this.terms.includes(term)) {
      //   //     this.terms.push(dataTermsSubject.term);
      //   //   }
      //   // });
      //   // this.terms = [...terms];
      //   // });
      // } else if (this.isParent) {
      // }
    });
  }
}
