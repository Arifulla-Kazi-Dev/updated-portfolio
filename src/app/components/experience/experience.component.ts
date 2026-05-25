import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-experience',
  imports: [IconComponent, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
