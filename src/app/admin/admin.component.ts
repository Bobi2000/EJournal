import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { mockSchool } from '../mocks.model';
import { AdminService } from '../services/admin.service';
import { SchoolModel, UserModel } from '../models';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public schools = [];

  constructor(private schoolService: SchoolService) {}

  async ngOnInit(): Promise<void> {
    this.schoolService.getSchools().subscribe((schools: SchoolModel[]) => {
      this.schools = schools;
      console.log(schools);
    });
  }
}
