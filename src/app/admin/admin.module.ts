import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolAddComponent } from './school-add/school-add.component';

@NgModule({
  declarations: [
    AdminComponent,
    SchoolEditComponent,
    SchoolViewComponent,
    SchoolAddComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
