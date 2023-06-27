import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsViewComponent } from './subjects-view.component';

describe('SubjectsViewComponent', () => {
  let component: SubjectsViewComponent;
  let fixture: ComponentFixture<SubjectsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectsViewComponent]
    });
    fixture = TestBed.createComponent(SubjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
