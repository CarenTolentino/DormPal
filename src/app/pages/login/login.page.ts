import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
  
  
    if (sign_in_btn) {
      sign_in_btn.addEventListener("click", () => {
      });
    }
  }

  register() {
    this.router.navigate(['register']);
  }
}
