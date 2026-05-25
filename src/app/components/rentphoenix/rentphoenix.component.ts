import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent } from '../ui/icon/icon.component';

@Component({
  selector: 'app-rentphoenix',
  imports: [IconComponent, RevealDirective],
  templateUrl: './rentphoenix.component.html',
  styleUrl: './rentphoenix.component.css'
})
export class RentphoenixComponent {}
