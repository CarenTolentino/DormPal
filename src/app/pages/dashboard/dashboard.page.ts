import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  fname:string

  @ViewChild('fileInput') fileInput!: ElementRef;

  handleUploadClick() {
    this.fileInput.nativeElement.click();
  }

  handleFileChange(event: any) {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile.name);

    // You can perform additional actions, such as uploading the file to a server.
  }

  constructor(private router: Router) { }

  ionViewDidEnter() {
    if (userService.UID == "no user") this.router.navigate(['login'])
    else{
      this.fname = userService.fname
   
    }
  }

  goToCreate() {
    this.router.navigate(['create'])
  }

  goToLLProfile() {
    this.router.navigate(['llprofile'])
  }

  goToDashboard() {
    this.router.navigate(['dashboard'])
  }

  ngOnInit() {
  }

}
