import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getStudentById(id: number): Observable<StudentModel> {
    return this.httpClient.get<StudentModel>('v1/students/' + id);
  }

  postStudent(body: any): Observable<any> {
    return this.httpClient.post<any>('v1/students', body);
  }
}
