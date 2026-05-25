import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'arifulla-theme';

  toggle(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const currentTheme = this.document.documentElement.dataset['theme'];
    const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
    this.document.documentElement.dataset['theme'] = nextTheme;
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', nextTheme === 'dark' ? '#120c20' : '#f8f6fc');

    try {
      localStorage.setItem(this.storageKey, nextTheme);
    } catch {
      // Theme still updates when browser privacy settings block storage.
    }
  }
}
