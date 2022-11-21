import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private readonly API = '/assets/courses.json';
  constructor(private HttpClient:HttpClient) { }

  list(){
    return this.HttpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(Courses => console.log(Courses))
    );
  }
}
