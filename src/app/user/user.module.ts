import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LocalDatePipe } from './localDate.pipe';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    UserComponent,
    StudentComponent,
    ParentComponent,
    TeacherComponent,
    LocalDatePipe,
  ],
  imports: [UserRoutingModule, CommonModule, FormsModule],
})
export class UserModule {}
