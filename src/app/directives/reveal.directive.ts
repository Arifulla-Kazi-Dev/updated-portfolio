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
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.elementRef.nativeElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.renderer.addClass(element, 'motion-reveal');
    this.renderer.addClass(element, `motion-${this.revealVariant}`);
    this.renderer.setStyle(element, '--reveal-delay', `${this.revealDelay}ms`);

    if (!('IntersectionObserver' in window)) {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
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
