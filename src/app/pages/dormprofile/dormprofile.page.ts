import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { dormService } from 'src/app/services/dorm.service';
import { CommonModule } from '@angular/common';

register();

@Component({
  selector: 'app-dormprofile',
  templateUrl: './dormprofile.page.html',
  styleUrls: ['./dormprofile.page.scss'],
  standalone: true,  
  imports: [IonicModule, SliderComponent, CommonModule],
})

export class DormprofilePage implements OnInit {
  utils: any = [];
  dormname:string
  dormaddress:string
  landlord:string
  number:string

  constructor(private router: Router,private httpClient:HttpClient) { }
  goToOtherPage() {
    this.router.navigateByUrl('/tabs/voucher');
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }

  ionViewDidEnter(){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

    this.httpClient.post('https://dormpal.000webhostapp.com/getdorm.php', ('{"DormID": ' + dormService.selecteddormID + '}'), {headers: headers}).subscribe((response) => {
      console.log(response)
      const row = response as any
      this.dormname = row.dormName
      this.dormaddress = row.dormAddress
      this.landlord = (row.fname + " " + row.lname)
      this.number = row.number
    })

      this.httpClient.post('https://dormpal.000webhostapp.com/getutilitylist.php', ('{"DormID": ' + dormService.selecteddormID + '}'),{headers: headers}).subscribe((response) => {
        console.log(response)
        this.utils = response
      })
  }

  ngOnInit() {
  }

}
