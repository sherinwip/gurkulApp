import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courseArr = [
    {
      courseName:'java',
      courseImg:'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
      coursefees:200000,
      courseID:'j1',
      duration:'2 Months'

    },
    {
      courseName:'CPP',
      courseImg:'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
      coursefees:800,
      courseID:'c1',
      duration:'3 Months'

    }, {
      courseName:'python',
      courseImg:'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
      coursefees:200000,
      courseID:'p1',
      duration:'4 Months'

    }
  ]
  ;

  get courseArr(){
    return [...this._courseArr];
  }

  fetchCourse(id:string){
    
     return this.courseArr.filter(course =>{
     
      course.courseID === id;
      if(course.courseID === id){

        console.log(course.courseID);
        return course;
      }
    });
  }

  constructor() { }
}
