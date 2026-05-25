import { Component, Input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'award'
  | 'briefcase'
  | 'building'
  | 'code'
  | 'compass'
  | 'document'
  | 'external'
  | 'github'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'network'
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
