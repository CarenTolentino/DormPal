import {Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-dorm',
  templateUrl: 'dorm.page.html',
  styleUrls: ['dorm.page.scss'],
})
export class DormPage implements OnInit, AfterViewInit {
    @ViewChild('swiper')
    swiperRef: ElementRef | undefined;
    swiper?: Swiper;

    images=[
        '../assets/cadena_b.png',
        '../assets/DSC09584.png',
        '../assets/DSC09582.png'
    ];
    
    /**DRawer */
    drawer_open = false;
    cta_button_show: any;
    cta_button_hide: any;
    slidedown: any;
    slideup: any;
  
    constructor() {}
    ngOnInit() {
    }
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
    ngAfterViewInit() {
        const ctaButton = document.querySelector(".cta-button") as HTMLElement;
        const backButton = document.querySelector(".back-btn") as HTMLElement;
    
        ctaButton.addEventListener("mouseup", () => {
          this.cta_button_hide.play();
        });
    
        backButton.addEventListener("mouseup", () => {
          if (this.drawer_open) {
            this.slidedown.play();
            this.cta_button_show.play();
          }
        });

       
      }
    
      show_hideCTA(param: string) {
        const ctaButton = document.querySelector(".cta-button") as HTMLElement;
        const ctaText = document.querySelector(".cta-text") as HTMLElement;
    
        if (ctaButton && ctaText) {
          ctaButton.style.display = param;
          ctaText.style.display = param;
        }
      }
}
