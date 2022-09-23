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
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 9,
    initialSlide: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    freeMode: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    scrollbar: { draggable: false },
    pagination: { clickable: true },
  };

  onSwiper(e: any) {
    // console.log(e);
  }

  onSlideChange() {
    // console.log('slide change');
  }
}
