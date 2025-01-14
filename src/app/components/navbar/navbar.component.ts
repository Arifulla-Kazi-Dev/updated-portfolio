import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  constructor(private router: Router) {} // Inject Router

  viewHome() {
    // Navigate to the Insights component
    this.router.navigate(['/']);
  }
  viewAbout() {
    // Navigate to the Insights component
    this.router.navigate(['/about']);
  }

  viewProject() {
    // Navigate to the Insights component
    this.router.navigate(['/projects']);
  }

  viewSkills() {
    // Navigate to the Insights component
    this.router.navigate(['/skills']);
  }
  viewExperience() {
    // Navigate to the Insights component
    this.router.navigate(['/experience']);
  }
  viewContact() {
    // Navigate to the Insights component
    this.router.navigate(['/contact']);
  }
}
