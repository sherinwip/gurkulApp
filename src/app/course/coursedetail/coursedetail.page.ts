import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.page.html',
  styleUrls: ['./coursedetail.page.scss'],
})
export class CoursedetailPage implements OnInit {
loadedCourse;
courseName:string;
  constructor(private courseService:CourseService,private routemap:ActivatedRoute) { }

  ngOnInit() {
}

ionViewDidEnter(){
  this.routemap.paramMap.subscribe(paramMap => {

  
    this.loadedCourse = this.courseService.fetchCourse(paramMap.get('id'));
    console.log('sherin course object ='+this.loadedCourse);
    this.courseName = this.loadedCourse[0].courseName;
  //this.loadedCourse = this.courseService.fetchCourse();
});
}
}
