import { ConstantPool } from '@angular/compiler';
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
  getLoading:boolean = false;
  getPassword:boolean = false;
  noVerification:boolean = false;
  buttonText = "Submit";

  //for login of user---
  login(loginDetails:NgForm){
    const mobileNumber = loginDetails.value.number;
    const password = loginDetails.value.password
    if(this.buttonText == "Submit"){
        this.searchProfile(mobileNumber);
    }else if(this.buttonText == "Login"){
      this.loginUser(password);
    }
  }

  searchProfile(mobileNumber){
    if(mobileNumber){
      console.log("we got mobile number , Mobile Number is "+mobileNumber);
      this.buttonText = "Login";
      this.getPassword = true;
      this.getLoading = true
    }else{
      setTimeout(() => {
        this.noVerification = true;
      }, 10);

    }
  }

  loginUser(password){
    if(password){
      console.log("Password is "+ password);
    }
  }
}
