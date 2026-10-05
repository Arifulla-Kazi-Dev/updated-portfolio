import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

/** Old standalone section URLs now land on the matching section of the single page. */
const legacySections = ['about', 'skills', 'projects', 'certificates', 'experience', 'contact'];

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'testimonials', redirectTo: '', pathMatch: 'full' },
  ...legacySections.map((section) => ({ path: section, redirectTo: `/#${section}`, pathMatch: 'full' as const })),
  { path: '**', redirectTo: '' }
];
