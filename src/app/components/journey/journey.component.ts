import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-journey',
  imports: [IconComponent, RevealDirective],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.css'
})
export class JourneyComponent {}
