import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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

  ngOnInit() {
  }

}
