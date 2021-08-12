import { LoginService } from './../../Services/login.service';
import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Profile} from '../../models/profile.class';
import {ProfileSearchReq} from '../../models/profileSearchReq.class'
// import {ToastMessage, ToastMessageType} from '../../Utils/toaster-service.helper'
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  constructor(private router : Router,private loginservice :LoginService) { }

  ngOnInit(): void {
  }
  hide = true;
  submit = true;
  getLoading:boolean = false;
  getPassword:boolean = false;
  noVerification:boolean = false;
  buttonText = "Submit";
  profile: Profile;
  userId:string;
  loginSuccessMsg:string;
  loginErrorMsg:string;

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

  //this function is to search user profile from mobile number
  searchProfile(mobileNumber){
    if(mobileNumber){
      let body = {
        mobileNumber : mobileNumber,
        profileType : "TAP_HELPER"
      }
      // let profileSearchReq = new ProfileSearchReq();
      // profileSearchReq.mobileNumber = mobileNumber;
      // profileSearchReq.profileType = "TAP_HELPER";
      // 9045230479
      this.loginservice.searchUserProfile(body).subscribe((profiles: Profile[])=>{
        //  if (profiles.length > 0){
        //     this.profile = profiles[0];
        //      console.log(profiles)
        //      if(this.profile.id){
        //       this.userId = this.profile.id;
        //       this.buttonText = "Login";
        //       this.getPassword = true;
        //       this.getLoading = true;
        //       this.noVerification = false;
        //       this.loginSuccessMsg = "Mobile Number verified Successfully!";
        //      }
        //   }else{
        //     console.log("no profile found")
        //     this.noVerification = true;
        //     this.loginErrorMsg = "No Profile match with this number.";
        //   }
        console.log(profiles);
        },
        (err)=>{
         console.log(err);

        }
      )

    }else{
      setTimeout(() => {
        this.noVerification = true;
      }, 10);

    }
  }


  loginUser(password){
    if(password){
      let body = {
        password : password,
        profileId : this.userId,
      }
      this.loginservice.loginUser(body).subscribe((res:[])=>{
        if(res.length >0){
            console.log(res);
            this.loginSuccessMsg = "You are logged in successfully!"

        }else{
          this.loginErrorMsg = "Invalid Credentials."
          this.noVerification = true;
          console.log("invalid");
        }

      })
      // console.log("Password is "+ password);
      // this.router.navigate(['user-login/user-verification'])
    }
  }
}
