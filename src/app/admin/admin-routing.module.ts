import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { SchoolViewComponent } from './school-view/school-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  { path: 'school-edit/:id', component: SchoolEditComponent },
  { path: 'school-view/:id', component: SchoolViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
