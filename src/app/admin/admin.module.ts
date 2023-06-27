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
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
