import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
 courses: Course[] = [
  {_id:'1', name:'Carlos', category: 'angular'}
 ];
 displayedColumns = ['name', 'category'];
}
