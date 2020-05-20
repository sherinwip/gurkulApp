import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

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

}
