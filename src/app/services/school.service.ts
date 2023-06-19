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

  public editSchool(body: SchoolModel): Observable<SchoolModel> {
    return this.http.put<SchoolModel>(`v1/schools/${body.id}`, body);
  }
}
