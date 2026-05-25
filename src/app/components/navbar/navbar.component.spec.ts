import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should lock background scroll while the mobile menu is open', () => {
    component.toggleMenu();

    expect(component.isMenuOpen).toBeTrue();
    expect(document.body.classList.contains('mobile-menu-open')).toBeTrue();

    component.closeMenu();

    expect(document.body.classList.contains('mobile-menu-open')).toBeFalse();
  });

  it('should close the mobile menu when escape is pressed', () => {
    component.toggleMenu();
    component.handleKeyboardNavigation(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(component.isMenuOpen).toBeFalse();
  });
});
