import { Component, OnInit } from '@angular/core';
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
  slides = [
    {'image': '../../../assets/slider/1.png'},
    {'image': '../../../assets/slider/2.png'},
    {'image': '../../../assets/slider/3.png'},
    {'image': '../../../assets/slider/4.png'},
    {'image': '../../../assets/slider/5.png'},
    {'image': '../../../assets/slider/6.png'},
    {'image': '../../../assets/slider/7.png'},
    {'image': '../../../assets/slider/8.png'},
    {'image': '../../../assets/slider/9.png'},
  ];
}
