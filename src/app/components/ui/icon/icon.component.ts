import { Component, Input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'award'
  | 'bell'
  | 'briefcase'
  | 'building'
  | 'calendar'
  | 'chart'
  | 'code'
  | 'compass'
  | 'document'
  | 'external'
  | 'github'
  | 'globe'
  | 'layers'
  | 'linkedin'
  | 'lock'
  | 'mail'
  | 'network'
  | 'phone'
  | 'rocket'
  | 'shield'
  | 'spark'
  | 'sync'
  | 'terminal'
  | 'users'
  | 'wallet';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
