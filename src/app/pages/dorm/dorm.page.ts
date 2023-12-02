import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { register } from 'swiper/swiper/element/angular';

register();
@Component({
  selector: 'app-dorm',
  templateUrl: './dorm.page.html',
  styleUrls: ['./dorm.page.scss'],
  standalone: true, 
  imports: [SliderComponent, IonicModule],
})
export class DormPage implements OnInit {
  slides: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
