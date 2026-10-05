import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type BrandName = 'company' | 'rentphoenix-os' | 'cofounder';

/** Official logos for RentPhoenix Technologies and its products, rendered as tiles. */
@Component({
  selector: 'app-brand-logo',
  templateUrl: './brand-logo.component.html',
  styleUrl: './brand-logo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"brand-logo brand-logo--" + brand',
    '[style.--logo-size]': 'size'
  }
})
export class BrandLogoComponent {
  @Input({ required: true }) brand!: BrandName;
  /** Tile edge length. */
  @Input() size = '3rem';
}
