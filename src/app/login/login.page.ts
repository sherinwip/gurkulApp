import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mobile="9545784840";

  showOTP=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showOTPField(){
  this.showOTP=true;
  }

  signIn(){
    this.router.navigateByUrl('entitytypeselect');
  }
  onSubmit(form:NgForm){
   if(!form.valid)
   return ;
    console.log(form.value.mobile);
    console.log(form.value.otp);
    console.log(this.mobile);

    

  }

}
