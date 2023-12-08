import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  fname:string
  lname:string
  usertype:string

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

  goToMap(){
    this.router.navigate(['map'])
  }

  ionViewDidEnter() {
    if (userService.UID == "no user") this.router.navigate(['login'])
    else{
      this.fname = userService.fname
      this.lname = userService.lname
      this.usertype = userService.usertype
    }
  }

  ngOnInit() {

  }
}
