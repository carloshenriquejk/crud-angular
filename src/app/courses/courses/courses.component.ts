import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {

 courses$: Observable<Course[]>;
 displayedColumns = ['name', 'category'];

// CoursesService: CoursesService;

 constructor (
  private CoursesService: CoursesService,
  public dialog: MatDialog
  ){
 // this.CoursesService = new CoursesService();
  this.courses$ = this.CoursesService.list()
  .pipe(
    catchError(error => {
      this.onError('Erro ao carregar cursos');
      return of([])
    })
  );
 }
 onError(errorMsg: string){
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  })
 }
}
