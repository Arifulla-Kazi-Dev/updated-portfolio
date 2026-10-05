import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';

type RevealVariant = 'up' | 'left' | 'scale';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealVariant: RevealVariant = 'up';

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const element = this.elementRef.nativeElement;
    let firstReport = true;

    // The observer's first report says whether the element starts on screen, without
    // forcing a layout. Content visible at load stays put (no blink after hydration);
    // only content still below the fold is hidden and animated in later.
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (firstReport) {
          firstReport = false;
          if (entry.isIntersecting) {
            this.observer?.disconnect();
            return;
          }
          this.renderer.addClass(element, 'motion-reveal');
          this.renderer.addClass(element, `motion-${this.revealVariant}`);
          this.renderer.setStyle(element, '--reveal-delay', `${this.revealDelay}ms`);
          return;
        }

        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'is-visible');
          this.observer?.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
      }
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
