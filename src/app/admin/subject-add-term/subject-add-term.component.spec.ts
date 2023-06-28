import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddTermComponent } from './subject-add-term.component';

describe('SubjectAddTermComponent', () => {
  let component: SubjectAddTermComponent;
  let fixture: ComponentFixture<SubjectAddTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAddTermComponent]
    });
    fixture = TestBed.createComponent(SubjectAddTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
