import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.page.html',
  styleUrls: ['./coursedetail.page.scss'],
})
export class CoursedetailPage implements OnInit, OnDestroy {
  loadedCourse: Course;
  courSub: Subscription;
  toggleIcon: boolean;

  constructor(private courseService: CourseService, private routemap: ActivatedRoute, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    // this.courseService.courses.subscribe(courses =>{
    //   this.loadedCourse = courses;
    // });
    this.routemap.paramMap.subscribe(paramMap => {


      this.courSub = this.courseService.fetchCourse(paramMap.get('id')).subscribe(course => {
        this.loadedCourse = course;

      }
      )
    });
    //this.loadedCourse = this.courseService.fetchCourse();

  }

  editCourseDetails(form: NgForm) {
    this.toggleIcon = true;
    console.log(form);
    this.loadingCtrl.create({ message: 'Updating Course...' },
    ).then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.toggleIcon = false;
      }, 2000);
    });
  }

  ngOnDestroy() {
    if (this.courSub) {
      this.courSub.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }






}
