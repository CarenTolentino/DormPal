import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-dormprofile',
  templateUrl: './dormprofile.page.html',
  styleUrls: ['./dormprofile.page.scss'],
  standalone: true,  
  imports: [IonicModule, SliderComponent,],
})
export class DormprofilePage implements OnInit {
  slides: any[] = [];

  constructor(private router: Router) { }
  goToOtherPage() {
    this.router.navigateByUrl('/tabs/voucher');
  }


  ngOnInit() {
  }

}
