import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Output() navigate = new EventEmitter<string>();
  sliderDuration = '12s';
  slideInterval = '3s';
  sliderImages = [
    {
      src: 'assets/JobTracker/hero-slider-01.png',
      alt: 'Portrait of Wendy in a studio setting',
    },
    {
      src: 'assets/JobTracker/hero-slider-02.png',
      alt: 'Portrait of Wendy with braids',
    },
    {
      src: 'assets/JobTracker/hero-slider-03.png',
      alt: 'Portrait of Wendy in a warm light',
    },
    {
      src: 'assets/JobTracker/hero-slider-04.png',
      alt: 'Portrait of Wendy with a neutral backdrop',
    },
  ];
}
