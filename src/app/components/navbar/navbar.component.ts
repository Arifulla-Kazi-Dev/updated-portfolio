import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../ui/icon/icon.component';

interface NavigationItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileNavigation') private mobileNavigation?: ElementRef<HTMLElement>;

  readonly navigationItems: NavigationItem[] = [
    { id: 'about', label: 'About' },
    { id: 'rentphoenix', label: 'Venture' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Credentials' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  activeSection = 'home';
  isMenuOpen = false;

  private intersectionObserver?: IntersectionObserver;
  private navigationSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly themeService: ThemeService,
    @Inject(PLATFORM_ID) private readonly platformId: object,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

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
    this.intersectionObserver?.disconnect();
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

  private queueSectionObservation(): void {
    window.requestAnimationFrame(() => this.observeSections());
  }

  private observeSections(): void {
    this.intersectionObserver?.disconnect();

    const sections = document.querySelectorAll<HTMLElement>('[data-nav-section]');
    if (!sections.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          this.activeSection = visibleSection.target.id;
        }
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0.08, 0.3, 0.6]
      }
    );

    sections.forEach((section) => this.intersectionObserver?.observe(section));
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
