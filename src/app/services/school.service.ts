import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  public getSchool(id: number): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(`v1/schools/${id}`);
  }

  public getSchools(): Observable<SchoolModel[]> {
    return this.http.get<SchoolModel[]>('v1/schools');
  }

  public postSchool(body: SchoolModel): Observable<SchoolModel> {
    return this.http.post<SchoolModel>(`v1/schools`, body);
  }

  public editSchool(body: SchoolModel): Observable<SchoolModel> {
    return this.http.put<SchoolModel>(`v1/schools/${body.id}`, body);
  }

  public deleteSchool(id: number): Observable<any> {
    return this.http.delete<any>(`v1/schools/${id}`);
  }

  public postTerm(body: any): Observable<any> {
    return this.http.post<any>(`v1/terms`, body);
  }

  public getAllTerms(): Observable<any> {
    return this.http.get<any>(`v1/terms`);
  }

  public getAllSchoolClasses(): Observable<any> {
    return this.http.get<any>(`v1/school-classes`);
  }

  public postSchoolClass(body): Observable<any> {
    return this.http.post<any>(`v1/school-classes`, body);
  }

  public getSchoolClass(id: number): Observable<any> {
    return this.http.get<any>(`v1/school-classes/${id}`);
  }

  // public postSubjectToTerm(id: number, subject_id: number): Observable<any> {
  //   return this.http.post<any>(`v1/terms/${}/subjects/${}`, null);
  // }
}
