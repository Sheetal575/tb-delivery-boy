import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  selectedFile: File;
  filePath:string;
  verficationStatus:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(this.selectedFile)
  }
  userVerificationDetails(verficationForm:NgForm){
    console.log(verficationForm.value);
    this.verficationStatus = true;

  }
}
