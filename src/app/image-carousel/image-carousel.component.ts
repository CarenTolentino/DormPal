import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  standalone: true, 
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class ImageCarouselComponent  implements OnInit {

  @Input() slides: any[] =[];
  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {}


}
