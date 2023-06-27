import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectModel } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private httpClient: HttpClient) {}

  getAllSubjects(): Observable<SubjectModel[]> {
    return this.httpClient.get<SubjectModel[]>('/v1/subjects');
  }

  postSubject(body: any): Observable<SubjectModel> {
    return this.httpClient.post<SubjectModel>('/v1/subjects', body);
  }

  deleteSubject(id: number): Observable<any> {
    return this.httpClient.delete<any>(`/v1/subjects/${id}`);
  }
}
