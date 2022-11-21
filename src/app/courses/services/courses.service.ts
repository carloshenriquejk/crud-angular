import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private readonly API = '/assetsa/courses.json';
  constructor(private HttpClient:HttpClient) { }

  list(){
    return this.HttpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(1500),
      tap(Courses => console.log(Courses))
    );
  }
}
