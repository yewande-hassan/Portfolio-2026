import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/home/hero/hero';
import { About } from './features/about/about';
import { Work } from './features/work/work';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [NgIf, RouterOutlet, Hero, About, Work, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  protected readonly activeSection = signal<'home' | 'about' | 'work' | 'contact'>(
    'home'
  );
  protected readonly previousSection = signal<
    'home' | 'about' | 'work' | 'contact'
  >('home');
  protected readonly navOpen = signal(false);
  private readonly availableSections = new Set(['home', 'about', 'work', 'contact']);

  protected hasSection(section: string): boolean {
    return this.availableSections.has(section);
  }

  protected setSection(section: string): void {
    if (!this.availableSections.has(section)) {
      return;
    }

    if (this.activeSection() !== section) {
      this.previousSection.set(this.activeSection());
    }

    this.activeSection.set(section as 'home' | 'about' | 'work' | 'contact');
    this.navOpen.set(false);
  }

  protected toggleNav(): void {
    this.navOpen.update((value) => !value);
  }

  protected goHome(): void {
    this.setSection('home');
  }

  protected goPrevious(): void {
    const previous = this.previousSection();
    if (previous === this.activeSection()) {
      this.setSection('home');
      return;
    }

    this.setSection(previous);
  }
}
