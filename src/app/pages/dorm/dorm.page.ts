import {Component, ElementRef, ViewChild} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-dorm',
  templateUrl: 'dorm.page.html',
  styleUrls: ['dorm.page.scss'],
})
export class DormPage {
    @ViewChild('swiper')
    swiperRef: ElementRef | undefined;
    swiper?: Swiper;

    images=[
        '../assets/cadena_b.png',
        '../assets/DSC09486.png',
        '../assets/DSC09496.png'

    ];

    constructor() {}

    swiperReady(){
        this.swiper= this.swiperRef?.nativeElement.swiper;
    }

    goNext(){
        this.swiper?.slideNext();
    }
    goPrev(){
        this.swiper?.slidePrev();
    }

    swiperSlideChanged(e:any){
        console.log('changed: ', e);
    }
  
}
