import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  counter = 0;

  constructor() {}

  onClickPlus(): number {
    if (this.counter + 1 >= this.slides.length) {
      console.log(this.counter);
      return (this.counter = 0);
    } else {
      console.log(this.counter);

      return (this.counter += 1);
    }
  }

  onClickMinus(): number {
    if (this.counter === 0) {
      console.log(this.counter);
      return (this.counter = this.slides.length - 1);
    } else {
      console.log(this.counter);

      return (this.counter -= 1);
    }
  }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/2018-02-17.jpg',
    };
    this.slides[1] = {
      src: './assets/img/2023-05-11.jpg',
    };
    this.slides[2] = {
      src: './assets/img/20181206_234000.jpg',
    };
  }
}
