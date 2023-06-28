import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolAddComponent } from './school-add/school-add.component';
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

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  { path: 'school-edit/:id', component: SchoolEditComponent },
  { path: 'school-view/:id', component: SchoolViewComponent },
  { path: 'school-add', component: SchoolAddComponent },
  { path: 'users-view', component: UsersViewComponent },
  { path: 'user-edit/:id', component: UsersEditComponent },
  { path: 'subjects-view', component: SubjectsViewComponent },
  { path: 'subject-add', component: SubjectsAddComponent },
  { path: 'term-add/:id', component: TermAddComponent },
  { path: 'class-add/:id', component: ClassAddComponent },
  { path: 'class-view/:id', component: ClassViewComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'student-add/:id', component: StudentAddComponent },
  { path: 'subject-add-term/:id', component: SubjectAddTermComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
