import { Component, Input, OnInit } from '@angular/core';
import { TermsModel, TermsSubjectModel, UserModel } from '../../models';
import { mockTermsSubject } from '../../mocks.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  @Input() currentTeacher: UserModel;
  mockTerms: TermsModel[] = [];
  mockTermsSubject: TermsSubjectModel[] = [];
  selectedTerm: string = '';
  constructor(private userService: UserService) {}

  ngOnInit() {
    mockTermsSubject.find((dataTermsSubject) => {
      if (
        dataTermsSubject.user.id === this.currentTeacher.id &&
        !this.mockTerms.includes(dataTermsSubject.term)
      ) {
        this.mockTerms.push(dataTermsSubject.term);
      }
    });
    this.selectedTerm = this.mockTerms[this.mockTerms.length - 1].name;
    mockTermsSubject.find((dataTermsSubject) => {
      if (dataTermsSubject.term.name === this.selectedTerm) {
        this.mockTermsSubject.push(dataTermsSubject);
      }
    });
  }
  onTermsChange() {
    this.mockTermsSubject = [];
    mockTermsSubject.find((dataTermsSubject) => {
      if (dataTermsSubject.term.name === this.selectedTerm) {
        this.mockTermsSubject.push(dataTermsSubject);
      }
    });
  }
}
