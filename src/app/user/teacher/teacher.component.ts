import { Component, Input, OnInit } from '@angular/core';
import {
  ClassModel,
  StudentModel,
  SubjectModel,
  TermsModel,
  UserModell,
} from '../../models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  @Input() currentTeacher: UserModell;
  terms: TermsModel[] = [];
  selectedTerm: string = '';
  subjects: SubjectModel[];
  schoolClasses: ClassModel[];
  students: StudentModel[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllTerms().subscribe((terms) => {
      this.terms = terms;
      this.selectedTerm = this.terms[this.terms.length - 1]?.name;
      this.onTermsChange();
    });
  }
  onTermsChange() {
    this.userService.getAllSchools().subscribe((schools) => {
      schools.forEach((school) => {
        school.schoolClasses.forEach((schoolClass) => {
          schoolClass.teachers.forEach((teacher) => {
            if (teacher.id === this.currentTeacher.id) {
              const selectedObject = this.terms.find(
                (term) => term?.name === this.selectedTerm
              );
              this.userService
                .getAllSubjectsByTermId(selectedObject.id)
                .subscribe((subjects) => {
                  this.subjects = subjects;
                  this.schoolClasses = school.schoolClasses;
                  this.students = schoolClass.students;
                });
            }
          });
        });
      });
    });
  }
}
