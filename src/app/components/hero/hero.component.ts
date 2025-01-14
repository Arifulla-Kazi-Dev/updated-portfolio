import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
// Import Router
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private router: Router) {}
  viewProject() {
    // Navigate to the Insights component
    this.router.navigate(['/projects']);
  }
  viewContact() {
    // Navigate to the Insights component
    this.router.navigate(['/contact']);
  }
}
