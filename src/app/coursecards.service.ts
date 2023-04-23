import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursecardsService {
  apiurl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getcourses(): Observable<any> {
    return this.http.get(`${this.apiurl}` + `courses`);
  }
}
