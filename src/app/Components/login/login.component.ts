import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;
  submit = true;
  getProfile:boolean = false;
  getPassword:boolean = false;
  buttonText = "Submit";

  //for login of user---
  login(loginDetails:NgForm){
    const mobileNumber = loginDetails.value.number;
    const password = loginDetails.value.password
    if(this.buttonText == "Submit"){
        this.buttonText = "Login";
        this.getProfile = true;
    }else if(this.buttonText == "Login"){
      console.log("login");
    }
  }
  showPassword(){
    this.getProfile = false;
    this.getPassword = true;
  }
}
