import { Component, OnInit } from '@angular/core';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-dorm',
  templateUrl: './dorm.page.html',
  styleUrls: ['./dorm.page.scss'],
  imports: [ ImageCarouselComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DormPage implements OnInit {
  slides: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
