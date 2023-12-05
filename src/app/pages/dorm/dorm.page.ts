import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import anime from 'animejs/lib/anime.es.js';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dorm',
  templateUrl: 'dorm.page.html',
  styleUrls: ['dorm.page.scss'],
})
export class DormPage implements OnInit, AfterViewInit {
  drawer_open = false;
  cta_button_show: any;
  cta_button_hide: any;
  slidedown: any;
  slideup: any;

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;






  ngOnInit() {}
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  ngAfterViewInit() {
    this.initSwiper();

    const ctaButton = document.querySelector('.cta-button') as HTMLElement;
    const backButton = document.querySelector('.back-btn') as HTMLElement;

    ctaButton.addEventListener('mouseup', () => {
      this.cta_button_hide.play();
    });

    backButton.addEventListener('mouseup', () => {
      if (this.drawer_open) {
        this.slidedown.play();
        this.cta_button_show.play();
      }
    });

    this.cta_button_show = anime({
      targets: ['.cta-button', '.cta-text'],
      translateY: ['-15', '0'],
      opacity: ['0', '1'],
      easing: 'easeInOutSine',
      delay: anime.stagger(200),
      autoplay: false,
      duration: 500,
      complete: () => {},
    });

    this.cta_button_hide = anime({
      targets: ['.cta-button', '.cta-text'],
      translateY: ['0', '-15'],
      opacity: ['1', '0'],
      easing: 'easeInOutSine',
      delay: anime.stagger(200),
      autoplay: false,
      duration: 500,
      complete: () => {
        this.slideup.play();
        this.drawer_open = true;
      },
    });

    this.slidedown = anime({
      targets: '.dorm-details-container',
      translateY: ['-200', '0px'],
      duration: 1000,
      autoplay: false,
      begin: () => {
        this.show_hideCTA('block');
        this.drawer_open = false;
      },
    });

    this.slideup = anime({
      targets: '.dorm-details-container',
      translateY: ['-0px', '-200px'],
      autoplay: false,
      begin: () => {
        this.show_hideCTA('none');
      },
    });
  }

  initSwiper() {
    this.swiper = new Swiper(this.swiperRef?.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  show_hideCTA(param: string) {
    const ctaButton = document.querySelector('.cta-button') as HTMLElement;
    const ctaText = document.querySelector('.cta-text') as HTMLElement;

    if (ctaButton && ctaText) {
      ctaButton.style.display = param;
      ctaText.style.display = param;
    }
  }
}
