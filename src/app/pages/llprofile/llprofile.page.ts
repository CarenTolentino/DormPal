import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-llprofile',
  templateUrl: './llprofile.page.html',
  styleUrls: ['./llprofile.page.scss'],
})
export class LlprofilePage implements OnInit {

  fname:string
  lname:string

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

  goToDashboard(){
    this.router.navigate(['dashboard'])
  }

  ionViewDidEnter() {
    if (userService.UID == "no user") this.router.navigate(['login'])
    else{
      this.fname = userService.fname
      this.lname = userService.lname

    }
  }

  ngOnInit() {

  }
}
