import {
  ClassModel,
  MarksModel,
  SchoolModel,
  StudentModel,
  StudentParentsModel,
  TermsModel,
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
    active: true,
    lastModified: new Date(),
    createdAt: new Date('2021-09-12'),
  },
  {
    id: 2,
    name: 'Teodor Popov',
    type: UserType.STUDENT,
    email: 'teodor.popov@mail.com',
    password: 'test',
    active: true,
    lastModified: new Date(),
    createdAt: new Date('2022-04-09'),
  },
  {
    id: 3,
    name: 'Stefan Ivanov',
    type: UserType.STUDENT,
    email: 'stefan.ivanov@mail.com',
    password: 'test',
    active: false,
    lastModified: new Date(),
    createdAt: new Date(),
  },
  {
    id: 4,
    name: 'Petya Petkova',
    type: UserType.PRINCIPAL,
    email: 'petya.petkova@mail.com',
    password: 'test',
    active: false,
    lastModified: new Date(),
    createdAt: new Date(),
  },
  {
    id: 5,
    name: 'Ivan Yordanov',
    type: UserType.PRINCIPAL,
    email: 'ivan.yordanov@mail.com',
    password: 'test',
    active: false,
    lastModified: new Date(),
    createdAt: new Date(),
  },
  {
    id: 6,
    name: 'Petyo Peev',
    type: UserType.PRINCIPAL,
    email: 'petyo.peev@mail.com',
    password: 'test',
    active: false,
    lastModified: new Date(),
    createdAt: new Date(),
  },
  {
    id: 7,
    name: 'Radostina Petrova',
    type: UserType.PARENT,
    email: 'radostina.petrova@mail.com',
    password: 'test',
    active: false,
    lastModified: new Date(),
    createdAt: new Date(),
  },
  {
    id: 8,
    name: 'Galina Peeva',
    type: UserType.PARENT,
    email: 'galina.peeva@mail.com',
    password: 'test',
    active: false,
    lastModified: new Date(),
    createdAt: new Date(),
  },
];

export const mockSchool: SchoolModel[] = [
  {
    id: 1,
    name: 'Петър Берон',
    address: '',
    principal: mockUsers[3],
  },
  {
    id: 1,
    name: 'ППМГ',
    address: '',
    principal: mockUsers[4],
  },
  {
    id: 1,
    name: 'Езикова гимназия',
    address: '',
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

export const mockTerms: TermsModel[] = [
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

export const mockMarks: MarksModel[] = [
  {
    id: 1,
    student: mockStudents[0],
    mark: 6,
    termsSubject: mockTerms[0],
  },
  {
    id: 2,
    student: mockStudents[0],
    mark: 5,
    termsSubject: mockTerms[0],
  },
  {
    id: 3,
    student: mockStudents[1],
    mark: 4,
    termsSubject: mockTerms[2],
  },
  {
    id: 4,
    student: mockStudents[2],
    mark: 4,
    termsSubject: mockTerms[2],
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
