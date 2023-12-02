import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements AfterViewInit {

  register:FormGroup

  constructor(private router: Router, private httpClient: HttpClient, public formBuilder: FormBuilder,private alertController:AlertController) { 
    this.register = this.formBuilder.group({
      fname:[''],
      lname:[''],
      number:[''],
      pword:[''],
      pwordC:[''],
      usertype:['']
    })
  }

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
  

  registerSubmit() {
    var data = JSON.stringify(this.register.value)
    
    console.log(data)

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    this.httpClient.post('https://dormpal.000webhostapp.com/register.php', data, {headers: headers}).subscribe((response) => {
      if(response == 'r01') this.presentAlert("ERROR","User already exists with this phone number.")
      if(response == 'r02') {
        this.presentAlert("Success","Successfully Signed Up!","Proceed to Log In")
        this.router.navigate(['login'])
      }
      if(response == 'r03') this.presentAlert("ERROR","Passwords Do Not Match.")
      if(response == 'r04') this.presentAlert("ERROR","Missing Input Parameters.")
    })
  }

  login() {
    this.router.navigate(['login']);
  }

  

}
