import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
  
    if (sign_up_btn) {
      sign_up_btn.addEventListener("click", () => {
      });
    }
  
    if (sign_in_btn) {
      sign_in_btn.addEventListener("click", () => {

      });
    }
  }

  login() {
    this.router.navigate(['login']);
  }
}
