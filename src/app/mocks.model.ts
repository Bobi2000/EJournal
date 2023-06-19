import {
  ClassModel,
  MarksModel,
  SchoolModel,
  StudentModel,
  StudentParentsModel,
  SubjectModel,
  TermsModel,
  TermsSubjectModel,
  UserModel,
  UserType,
} from './models';

export const mockUsers: UserModel[] = [
  {
    id: 1,
    name: 'Мария Петрова',
    type: UserType.STUDENT,
    email: 'mariya.petrova@mail.com',
    password: 'test',
  },
  {
    id: 2,
    name: 'Teodor Popov',
    type: UserType.STUDENT,
    email: 'teodor.popov@mail.com',
    password: 'test',
  },
  {
    id: 3,
    name: 'Stefan Ivanov',
    type: UserType.STUDENT,
    email: 'stefan.ivanov@mail.com',
    password: 'test',
  },
  {
    id: 4,
    name: 'Petya Petkova',
    type: UserType.PRINCIPAL,
    email: 'petya.petkova@mail.com',
    password: 'test',
  },
  {
    id: 5,
    name: 'Ivan Yordanov',
    type: UserType.PRINCIPAL,
    email: 'ivan.yordanov@mail.com',
    password: 'test',
  },
  {
    id: 6,
    name: 'Petyo Peev',
    type: UserType.PRINCIPAL,
    email: 'petyo.peev@mail.com',
    password: 'test',
  },
  {
    id: 7,
    name: 'Radostina Petrova',
    type: UserType.PARENT,
    email: 'radostina.petrova@mail.com',
    password: 'test',
  },
  {
    id: 8,
    name: 'Galina Peeva',
    type: UserType.PARENT,
    email: 'galina.peeva@mail.com',
    password: 'test',
  },
  {
    id: 9,
    name: 'Jojo',
    type: UserType.ADMIN,
    email: 'jojo.jojo@gmail.com',
    password: 'jojo',
  },
  {
    id: 10,
    name: 'Test Test',
    type: UserType.TEACHER,
    email: 'test.test@gmail.com',
    password: 'test',
  },
];

export const mockSchool: SchoolModel[] = [
  {
    id: 1,
    name: 'Петър Берон',
    address: 'address',
    principal: mockUsers[3],
  },
  {
    id: 2,
    name: 'ППМГ',
    address: 'address',
    principal: mockUsers[4],
  },
  {
    id: 3,
    name: 'Езикова гимназия',
    address: 'address',
    principal: mockUsers[5],
  },
];

export const mockClasses: ClassModel[] = [
  {
    id: 1,
    name: '8a',
    school: mockSchool[0],
  },
  {
    id: 2,
    name: '10б',
    school: mockSchool[1],
  },
  {
    id: 3,
    name: '12г',
    school: mockSchool[2],
  },
];

export const mockSubjects: SubjectModel[] = [
  {
    id: 1,
    name: 'Математика',
    abbreviation: '',
  },
  {
    id: 2,
    name: 'Български език',
    abbreviation: 'БЕ',
  },
  {
    id: 3,
    name: 'Английски език',
    abbreviation: 'АЕ',
  },
];

export const mockTerms: TermsModel[] = [
  {
    id: 1,
    name: 'есен 2022/2023',
    abbreviation: '',
  },
  {
    id: 2,
    name: 'пролет 2022/2023',
    abbreviation: '',
  },
  {
    id: 3,
    name: 'есен 2023/2024',
    abbreviation: '',
  },
];

export const mockStudents: StudentModel[] = [
  {
    id: 1,
    egn: '0147236956',
    class: mockClasses[0],
    user: mockUsers[0],
  },
  {
    id: 2,
    egn: '9912034526',
    class: mockClasses[1],
    user: mockUsers[1],
  },
  {
    id: 3,
    egn: '9803075689',
    class: mockClasses[2],
    user: mockUsers[2],
  },
];

export const mockStudentParents: StudentParentsModel[] = [
  {
    id: 1,
    student: mockStudents[0],
    parent: mockUsers[6],
  },
  {
    id: 2,
    student: mockStudents[1],
    parent: mockUsers[6],
  },
  {
    id: 1,
    student: mockStudents[2],
    parent: mockUsers[7],
  },
];

export const mockTermsSubject: TermsSubjectModel[] = [
  {
    id: 1,
    term: mockTerms[0],
    subject: mockSubjects[0],
    user: mockUsers[9],
    class: mockClasses[0],
  },
  {
    id: 2,
    term: mockTerms[0],
    subject: mockSubjects[1],
    user: mockUsers[9],
    class: mockClasses[0],
  },
  {
    id: 3,
    term: mockTerms[1],
    subject: mockSubjects[2],
    user: mockUsers[9],
    class: mockClasses[0],
  },
  {
    id: 4,
    term: mockTerms[2],
    subject: mockSubjects[0],
    user: mockUsers[9],
    class: mockClasses[1],
  },
];

export const mockMarks: MarksModel[] = [
  {
    id: 1,
    student: mockStudents[0],
    mark: 6,
    termsSubject: mockTermsSubject[0],
  },
  {
    id: 2,
    student: mockStudents[0],
    mark: 5,
    termsSubject: mockTermsSubject[0],
  },
  {
    id: 3,
    student: mockStudents[1],
    mark: 4,
    termsSubject: mockTermsSubject[2],
  },
  {
    id: 4,
    student: mockStudents[2],
    mark: 4,
    termsSubject: mockTermsSubject[2],
  },
];
