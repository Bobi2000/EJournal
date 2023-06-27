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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
