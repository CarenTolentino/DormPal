import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    ['assets/dorm-apartment-studio/dorm1.jpg', 'assets/dorm-apartment-studio/apartment1.jpg'],
    ['assets/dorm-apartment-studio/apartment1.jpg', 'assets/dorm-apartment-studio/studiotype1.webp'],
    // Add more pairs as needed
  ]
  

  constructor() { }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  ngOnInit() {
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
}
