import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermAddComponent } from './term-add.component';

describe('TermAddComponent', () => {
  let component: TermAddComponent;
  let fixture: ComponentFixture<TermAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermAddComponent]
    });
    fixture = TestBed.createComponent(TermAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
