import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolViewComponent } from './school-view/school-view.component';
import { SchoolAddComponent } from './school-add/school-add.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  { path: 'school-edit/:id', component: SchoolEditComponent },
  { path: 'school-view/:id', component: SchoolViewComponent },
  { path: 'school-add', component: SchoolAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
