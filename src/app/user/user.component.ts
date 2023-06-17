import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockUsers } from '../mocks.model';
import { UserModel, UserType } from '../models';

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
    active: true,
    lastModified: new Date(),
    createdAt: new Date('2021-09-12'),
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    mockUsers.find((data) => {
      if (data.id === Number(id)) {
        this.currentUser = data;
      }
    });
  }
}
