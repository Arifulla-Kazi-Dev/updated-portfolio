import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { BrandLogoComponent } from '../ui/brand-logo/brand-logo.component';
import { IconComponent } from '../ui/icon/icon.component';

interface NavigationItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, BrandLogoComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileNavigation') private mobileNavigation?: ElementRef<HTMLElement>;

  readonly navigationItems: NavigationItem[] = [
    { id: 'about', label: 'About' },
    { id: 'rentphoenix', label: 'Ventures' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Credentials' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = 'home';
  isMenuOpen = false;

  private sections: HTMLElement[] = [];
  private scrollFrame = 0;
  private navigationSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly themeService: ThemeService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2,
    private readonly zone: NgZone
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Scroll tracking runs outside Angular so scrolling never triggers change detection;
    // the zone is re-entered only when the highlighted section actually changes.
    this.zone.runOutsideAngular(() => window.addEventListener('scroll', this.onScroll, { passive: true }));
    this.queueSectionObservation();
    this.navigationSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        this.queueSectionObservation();
      });
  }

  ngOnDestroy(): void {
    this.setMenuState(false);
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
      window.cancelAnimationFrame(this.scrollFrame);
    }
    this.navigationSubscription?.unsubscribe();
  }

  toggleMenu(): void {
    this.setMenuState(!this.isMenuOpen);

    if (this.isMenuOpen && isPlatformBrowser(this.platformId)) {
      window.requestAnimationFrame(() => {
        this.mobileNavigation?.nativeElement.querySelector<HTMLElement>('a')?.focus();
      });
    }
  }

  closeMenu(restoreFocus = false): void {
    const wasOpen = this.isMenuOpen;
    this.setMenuState(false);

    if (restoreFocus && wasOpen && isPlatformBrowser(this.platformId)) {
      window.requestAnimationFrame(() => this.menuToggle?.nativeElement.focus());
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardNavigation(event: KeyboardEvent): void {
    if (!this.isMenuOpen) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu(true);
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const links = Array.from(
      this.mobileNavigation?.nativeElement.querySelectorAll<HTMLElement>('a[href]') ?? []
    );
    if (!links.length) {
      return;
    }

    const firstLink = links[0];
    const lastLink = links[links.length - 1];
    if (event.shiftKey && this.document.activeElement === firstLink) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && this.document.activeElement === lastLink) {
      event.preventDefault();
      firstLink.focus();
    }
  }

  @HostListener('window:resize')
  closeMenuOnDesktop(): void {
    if (isPlatformBrowser(this.platformId) && window.innerWidth >= 1000 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  private readonly onScroll = (): void => {
    if (this.scrollFrame) {
      return;
    }
    this.scrollFrame = window.requestAnimationFrame(() => {
      this.scrollFrame = 0;
      this.updateActiveSection();
    });
  };

  private queueSectionObservation(): void {
    window.requestAnimationFrame(() => {
      this.sections = Array.from(this.document.querySelectorAll<HTMLElement>('[data-nav-section]'));
      this.updateActiveSection();
    });
  }

  /** The active section is the last one whose top has passed a line 30% down the viewport. */
  private updateActiveSection(): void {
    const marker = window.innerHeight * 0.3;
    let current = this.sections[0]?.id ?? 'home';

    for (const section of this.sections) {
      if (section.getBoundingClientRect().top <= marker) {
        current = section.id;
      } else {
        break;
      }
    }

    // The final section is short; treat reaching the page bottom as arriving there.
    const atBottom = window.innerHeight + window.scrollY >= this.document.documentElement.scrollHeight - 4;
    if (atBottom && this.sections.length) {
      current = this.sections[this.sections.length - 1].id;
    }

    if (current !== this.activeSection) {
      this.zone.run(() => (this.activeSection = current));
    }
  }

  private setMenuState(isOpen: boolean): void {
    this.isMenuOpen = isOpen;

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (isOpen) {
      this.renderer.addClass(this.document.body, 'mobile-menu-open');
    } else {
      this.renderer.removeClass(this.document.body, 'mobile-menu-open');
    }
  }
}
