import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { mockSchool } from '../mocks.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public schools = [];

  ngOnInit(): void {
    this.schools = mockSchool;
  }
}
