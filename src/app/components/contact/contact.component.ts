import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { BrandLogoComponent } from '../ui/brand-logo/brand-logo.component';
import { IconComponent } from '../ui/icon/icon.component';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact',
  imports: [BrandLogoComponent, IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly year = new Date().getFullYear();
  readonly status = signal<FormStatus>('idle');

  /** Submits in place so visitors never leave the portfolio for a third-party page. */
  async send(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    if (this.status() === 'sending') {
      return;
    }

    const form = event.target as HTMLFormElement;
    this.status.set('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) {
        throw new Error(`Form endpoint responded ${response.status}`);
      }
      form.reset();
      this.status.set('sent');
    } catch {
      this.status.set('error');
    }
  }

  reset(): void {
    this.status.set('idle');
  }
}
