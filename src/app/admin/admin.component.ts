import { Component, OnInit } from '@angular/core';

import { SchoolModel } from '../models';
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
    });
  }

  public deleteSchool(id: number): void {
    this.schoolService.deleteSchool(id).subscribe(() => {
      location.reload();
    });
  }
}
