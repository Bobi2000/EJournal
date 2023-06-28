import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolAddComponent } from './school-add/school-add.component';
import { SubNavbarComponent } from '../components/sub-navbar/sub-navbar.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { SubjectsViewComponent } from './subjects-view/subjects-view.component';
import { SubjectsAddComponent } from './subjects-add/subjects-add.component';
import { TermAddComponent } from './term-add/term-add.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassViewComponent } from './class-view/class-view.component';
import { UserAddComponent } from './user-add/user-add.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { SubjectAddTermComponent } from './subject-add-term/subject-add-term.component';

@NgModule({
  declarations: [
    AdminComponent,
    SchoolEditComponent,
    SchoolViewComponent,
    SchoolAddComponent,
    SubNavbarComponent,
    UsersViewComponent,
    UsersEditComponent,
    SubjectsViewComponent,
    SubjectsAddComponent,
    TermAddComponent,
    ClassAddComponent,
    ClassViewComponent,
    UserAddComponent,
    StudentAddComponent,
    SubjectAddTermComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
