export interface StudentModel {
  id: number;
  egn: string;
  name: string;
  class: ClassModel;
  userId: number;
  schoolClassId: number;
}

export interface ClassModel {
  id: number;
  name: string;
  schoolId: number;
  students: StudentModel[];
  subjects: SubjectModel[];
  teachers: UserModel[];
  marks: MarksModel[];
  absences: [];
}

export interface SchoolModel {
  id: number;
  name: string;
  address: string;
  principalId: number;
  schoolClasses: ClassModel[];
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

export interface UserModell {
  id: number;
  name: string;
  roles: string[];
  email: string;
  password?: string;
  children: StudentModel[];
}
export interface StudentParentsModel {
  id: number;
  student: StudentModel;
  parent: UserModell;
}

export interface TermsSubjectModel {
  id: number;
  term: TermsModel;
  subject: SubjectModel;
  user: UserModell;
  class: ClassModel;
}

export enum UserType {
  ADMIN = 'ADMIN',
  PRINCIPAL = 'PRINCIPAL',
  TEACHER = 'TEACHER',
  PARENT = 'PARENT',
  STUDENT = 'STUDENT',
}

export const terms = [
  {
    id: 1,
    classId: 1,
    name: 'Term1',
    subjects: [],
  },
  { id: 2, classId: 1, name: 'Term2', subjects: [] },
];
