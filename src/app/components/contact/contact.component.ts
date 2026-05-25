import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
