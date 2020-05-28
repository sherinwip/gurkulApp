import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit ,OnDestroy{

   loadedCoursesList:Course[];
   courseSub:Subscription
  constructor(private router:Router,private courseListService:CourseService) { }

  ngOnInit() {
   this.courseSub =  this.courseListService.courses.subscribe(course =>{
      this.loadedCoursesList = course;
    });
  }

  addCourse(){
    console.log('open add course');
  }

  openCourseDetails(id:string){
    console.log('id='+id);
    this.router.navigate(['course/coursedetail',id]);
  }
ngOnDestroy(){
  if(this.courseSub){
    this.courseSub.unsubscribe();
  }
}
}
