export interface StudentModel {
  id: number;
  egn: string;
  class: ClassModel;
  user: UserModel;
}

export interface ClassModel {
  id: number;
  name: string;
  school: SchoolModel;
}

export interface SchoolModel {
  id: number;
  name: string;
  address: string;
  principalId: number;
}

export interface MarksModel {
  id: number;
  student: StudentModel;
  mark: number;
  termsSubject: TermsSubjectModel;
}

export interface SubjectModel {
  id: number;
  name: string;
  abbreviation: string;
}

export interface TermsModel {
  id: number;
  name: string;
  abbreviation: string;
}

export interface UserModel {
  id: number;
  name: string;
  type: UserType;
  email: string;
  password: string;
}

export interface StudentParentsModel {
  id: number;
  student: StudentModel;
  parent: UserModel;
}

export interface TermsSubjectModel {
  id: number;
  term: TermsModel;
  subject: SubjectModel;
  user: UserModel;
  class: ClassModel;
}

export enum UserType {
  ADMIN = 'Admin',
  PRINCIPAL = 'Principal',
  TEACHER = 'Teacher',
  PARENT = 'Parent',
  STUDENT = 'Student',
}
