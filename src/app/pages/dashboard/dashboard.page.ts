import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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

  goToCreate() {
    this.router.navigate(['create'])
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }

  goToDashboard() {
    this.router.navigate(['dashboard'])
  }

  ngOnInit() {
  }

}
