import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CourseService } from './course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

   loadedCoursesList;
  constructor(private router:Router,private courseListService:CourseService) { }

  ngOnInit() {
    this.loadedCoursesList  = this.courseListService.courseArr;
  }

  addCourse(){
    console.log('opoen add course');
  }

  openCourseDetails(id:string){
    console.log('id='+id);
    this.router.navigate(['course/coursedetail',id]);
  }

}
