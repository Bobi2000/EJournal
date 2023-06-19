import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModel, TermsModel, UserModel, UserType } from '../models';
import { UserService } from '../services/user.service';
import { mockUsers } from '../mocks.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  currentUser: UserModel = {
    id: 1,
    name: 'Мария Петрова',
    type: UserType.PARENT,
    email: 'mariya.petrova@mail.com',
    password: 'test',
  };
  // terms: TermsModel[] = [];
  // children: StudentModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute // private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    mockUsers.find((data) => {
      if (data.id === Number(id)) {
        this.currentUser = data;
      }
    });
    // this.userService.getUserById(Number(id)).subscribe((user) => {
    //   this.currentUser = user;
    //   if (this.currentUser.type === UserType.TEACHER) {
    //     // this.userService.getAllTermsSubjects().subscribe((terms) => {
    //     //   terms.find((term) => {
    //     //     if (
    //     //       term.user.id === this.currentUser.id &&
    //     //       !this.terms.includes(term.term)
    //     //     ) {
    //     //       this.mockTerms.push(dataTermsSubject.term);
    //     //     }
    //     //   });
    //     // this.terms = [...terms];
    //     // });
    //   } else if (this.currentUser.type === UserType.PARENT) {
    //   }
    // });
  }
}
