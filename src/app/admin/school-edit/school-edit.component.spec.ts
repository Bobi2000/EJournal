import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEditComponent } from './school-edit.component';

describe('SchoolEditComponent', () => {
  let component: SchoolEditComponent;
  let fixture: ComponentFixture<SchoolEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolEditComponent]
    });
    fixture = TestBed.createComponent(SchoolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
