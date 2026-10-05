import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { BrandLogoComponent } from '../ui/brand-logo/brand-logo.component';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-hero',
  imports: [BrandLogoComponent, IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
