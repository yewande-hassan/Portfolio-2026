import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  jobtrackerDuration = '12s';
  jobtrackerInterval = '3s';
  jobtrackerImages = [
    {
      src: 'assets/JobTracker/hero-slider-01.png',
      alt: 'JobTracker dashboard preview',
    },
    {
      src: 'assets/JobTracker/hero-slider-02.png',
      alt: 'JobTracker pipeline overview',
    },
    {
      src: 'assets/JobTracker/hero-slider-03.png',
      alt: 'JobTracker interview schedule view',
    },
    {
      src: 'assets/JobTracker/hero-slider-04.png',
      alt: 'JobTracker insights summary',
    },
  ];
  tymmedDuration = '18s';
  tymmedInterval = '3s';
  tymmedImages = [
    {
      src: 'assets/Tymmed/Screenshot 2026-01-21 at 3.19.11 PM.png',
      alt: 'Tymmed interface overview',
    },
    {
      src: 'assets/Tymmed/Screenshot 2026-01-21 at 3.26.02 PM.png',
      alt: 'Tymmed workflow details screen',
    },
    {
      src: 'assets/Tymmed/Screenshot 2026-01-21 at 3.26.16 PM.png',
      alt: 'Tymmed activity feed panel',
    },
    {
      src: 'assets/Tymmed/Screenshot 2026-01-21 at 3.26.37 PM.png',
      alt: 'Tymmed analytics dashboard',
    },
    {
      src: 'assets/Tymmed/Screenshot 2026-01-21 at 3.27.23 PM.png',
      alt: 'Tymmed patient insights view',
    },
    {
      src: 'assets/Tymmed/Screenshot 2026-01-21 at 3.27.54 PM.png',
      alt: 'Tymmed reporting interface',
    },
  ];

  demicareDuration = '24s';
  demicareInterval = '3s';
  demicareImages = [
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.42.25 PM.png',
      alt: 'DemiCare interface overview',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.43.04 PM.png',
      alt: 'DemiCare dashboard highlights',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.43.14 PM.png',
      alt: 'DemiCare clinic performance view',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.43.44 PM.png',
      alt: 'DemiCare scheduling workflow',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.43.52 PM.png',
      alt: 'DemiCare patient profile detail',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.44.25 PM.png',
      alt: 'DemiCare care plan editor',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.44.39 PM.png',
      alt: 'DemiCare service listing',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.44.56 PM.png',
      alt: 'DemiCare intake overview',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.45.15 PM.png',
      alt: 'DemiCare messaging panel',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.45.24 PM.png',
      alt: 'DemiCare patient activity log',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.45.38 PM.png',
      alt: 'DemiCare clinic performance summary',
    },
    {
      src: 'assets/DemiCare/Screenshot 2026-01-21 at 3.45.51 PM.png',
      alt: 'DemiCare reporting overview',
    },
  ];

  japanDuration = '18s';
  japanInterval = '3s';
  japanImages = [
    {
      src: 'assets/Japan/Screenshot 2026-01-21 at 4.02.57 PM.png',
      alt: 'Japan dating app home screen',
    },
    {
      src: 'assets/Japan/Screenshot 2026-01-21 at 4.03.06 PM.png',
      alt: 'Japan dating app profile view',
    },
    {
      src: 'assets/Japan/Screenshot 2026-01-21 at 4.03.15 PM.png',
      alt: 'Japan dating app match suggestions',
    },
    {
      src: 'assets/Japan/Screenshot 2026-01-21 at 4.03.28 PM.png',
      alt: 'Japan dating app chat preview',
    },
    {
      src: 'assets/Japan/Screenshot 2026-01-21 at 4.03.38 PM.png',
      alt: 'Japan dating app discovery feed',
    },
    {
      src: 'assets/Japan/Screenshot 2026-01-21 at 4.03.48 PM.png',
      alt: 'Japan dating app onboarding screen',
    },
  ];
}
