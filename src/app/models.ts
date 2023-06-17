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
  principal: UserModel;
}

export interface MarksModel {
  id: number;
  student: StudentModel;
  mark: number;
  termsSubject: TermsModel;
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
  active: boolean;
  lastModified: Date;
  createdAt: Date;
}

export interface StudentParentsModel {
  id: number;
  student: StudentModel;
  parent: UserModel;
}

export enum UserType {
  ADMIN = 'Admin',
  PRINCIPAL = 'Principal',
  TEACHER = 'Teacher',
  PARENT = 'Parent',
  STUDENT = 'Student',
}
