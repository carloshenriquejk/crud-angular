import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

 courses: Observable<Course[]>;
 displayedColumns = ['name', 'category'];

// CoursesService: CoursesService;

 constructor (private CoursesService: CoursesService){
 // this.CoursesService = new CoursesService();
  this.courses = this.CoursesService.list();
 }
}
