// image-carousel.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent implements OnInit {
  @ViewChild('slider', { static: true }) slider: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  constructor() {}

  ngOnInit() {}

  async ngAfterViewInit() {
    await this.slider.update();
  }
}
