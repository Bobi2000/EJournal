import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  { path: 'school-edit/:id', component: SchoolEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
