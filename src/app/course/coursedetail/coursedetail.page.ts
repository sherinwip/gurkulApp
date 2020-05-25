import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.page.html',
  styleUrls: ['./coursedetail.page.scss'],
})
export class CoursedetailPage implements OnInit,OnDestroy{
loadedCourse:Course;
courSub:Subscription;

  constructor(private courseService:CourseService,private routemap:ActivatedRoute) { }

  ngOnInit() {
    // this.courseService.courses.subscribe(courses =>{
    //   this.loadedCourse = courses;
    // });
    this.routemap.paramMap.subscribe(paramMap => {

  
     this.courSub = this.courseService.fetchCourse(paramMap.get('id')).subscribe( course =>{
        this.loadedCourse= course;
     
      }
      )
      });
    //this.loadedCourse = this.courseService.fetchCourse();

  }

  ngOnDestroy(){
    if(this.courSub){
      this.courSub.unsubscribe();
    }
  }

  



  
}
