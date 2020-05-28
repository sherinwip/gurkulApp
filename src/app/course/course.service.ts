import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {take,map,find} from 'rxjs/operators';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private _courseArr = new BehaviorSubject<Course[]>(

    [
      {
        courseName:'java',
        courseImg:'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
        coursefees:'Rs 200000',
        courseID:'j1',
        duration:'2 Months',
        description:'This is java course'
  
      },
      {
        courseName:'CPP',
        courseImg:'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
        coursefees:'Rs 800',
        courseID:'c1',
        duration:'3 Months',
        description:'This is CPP course'
  
      }, {
        courseName:'python',
        courseImg:'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
        coursefees:'Rs 200000',
        courseID:'p1',
        duration:'4 Months',
        description:'This is python course'
  
      }
    ]
  
  );

get courses(){
    return this._courseArr.asObservable();
  }

  

  fetchCourse(id:string){
  
    return this.courses.pipe(take(1),map(course =>{
      return {...course.find(p=>p.courseID === id)}}
      
      ));
    }
  }

