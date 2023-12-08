import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-llprofile',
  templateUrl: './llprofile.page.html',
  styleUrls: ['./llprofile.page.scss'],
})
export class LlprofilePage implements OnInit {

  constructor(private router: Router) { }

  goToEditName() {
    this.router.navigate(['edit-name'])
  }

  goToChangePassword() {
    this.router.navigate(['change'])
  }

  goToChangeNumber() {
    this.router.navigate(['number'])
  }

  goToDashboard() {
    this.router.navigate(['dashboard'])
  }
  ngOnInit() {
  }

}
