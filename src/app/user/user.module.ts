import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LocalDatePipe } from './localDate.pipe';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
    StudentComponent,
    ParentComponent,
    TeacherComponent,
    LocalDatePipe,
  ],
  imports: [UserRoutingModule, CommonModule],
})
export class UserModule {}
