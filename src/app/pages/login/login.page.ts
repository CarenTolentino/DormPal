import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements AfterViewInit {

  login: FormGroup;

  constructor(private router: Router, private httpClient: HttpClient, public formBuilder: FormBuilder, private alertController:AlertController) { 
    this.login = this.formBuilder.group({
      number:[''],
      password:['']
    })
  }

  async presentAlert(alertHeader:string, alertMessage:string, alertButtons?:any){
    let button = 'RETURN'
    if (alertButtons != null) button = alertButtons
    const alert = await this.alertController.create({
      header : alertHeader,
      message: alertMessage,
      buttons: [button]
    })

    await alert.present()
  }

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    
  
    if (sign_in_btn) {
      sign_in_btn.addEventListener("click", () => {
      });
    }
  }

  loginSubmit() {
    
    var data = JSON.stringify(this.login.value)

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    this.httpClient.post('https://dormpal.000webhostapp.com/login.php', data, {headers: headers}).subscribe((response) => {
      if(response != null) {
        if(response == 'l02') this.presentAlert("ERROR","Incorrect Password.")
        else if(response == 'l03') this.presentAlert("ERROR","User not Found.")
        else{
        const row = response as any
        userService.pushData({
          UID: row.UID,
          fname: row.fname,
          lname: row.lname,
          usertype: row.usertype
        })
        if (row.usertype == 'tenant') this.router.navigate(['map'])
        if (row.usertype == 'landlord') this.router.navigate(['dashboard'])
        }
      }
    })
  }

  register() {
    this.router.navigate(['register']);
  }
}
