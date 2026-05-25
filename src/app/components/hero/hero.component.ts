import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-hero',
  imports: [IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
