import { Component } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 9,
    initialSlide: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    scrollbar: { draggable: false },
    pagination: { clickable: true, dynamicBullets: true },
  };

  mobileConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 9,
    initialSlide: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    scrollbar: { draggable: false },
    pagination: { clickable: true, dynamicBullets: true },
  };

  onSwiper(e: any) {
    // console.log(e);
  }

  onSlideChange() {
    // console.log('slide change');
  }
}
