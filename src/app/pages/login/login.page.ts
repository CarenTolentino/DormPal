import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements AfterViewInit {

  login: FormGroup;

  constructor(private router: Router, private httpClient: HttpClient, public formBuilder: FormBuilder) { 
    this.login = this.formBuilder.group({
      number:[''],
      password:['']
    })
  }

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
  
  
    if (sign_in_btn) {
      sign_in_btn.addEventListener("click", () => {
      });
    }
  }

  loginSubmit() {
    console.log(this.login.value)
  }

  register() {
    this.router.navigate(['register']);
  }
}
