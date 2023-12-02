import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

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
    
    console.log(data)

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    this.httpClient.post('https://dormpal.000webhostapp.com/login.php', data, {headers: headers}).subscribe((response) => {
      console.log(response)
      if(response == 'l01') {
        this.presentAlert("Success","Successfully Signed Up!","Proceed to Log In")
      }
      if(response == 'l02') this.presentAlert("ERROR","Incorrect Password.")
      if(response == 'l03') this.presentAlert("ERROR","User not Found.")
    })

    // this.httpClient.post('https://dormpal.000webhostapp.com/login.php', data, {headers: headers}).subscribe((res) => {
    //   console.log("Posted successfully")
    //   console.log(res);
    // }, (err) => {
    //   console.log(err.error);
    // });
    
    // console.log(this.login.value)
    // this.httpClient.post('https://dormpal.000webhostapp.com/login.php ', data).subscribe((res) => {
    //   console.log("Posted successfully")
    //   console.log(res);
    // }, (err) => {
    //   console.log(err.error);
    // })
  }

  register() {
    this.router.navigate(['register']);
  }
}
