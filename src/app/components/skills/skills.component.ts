import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent, IconName } from '../ui/icon/icon.component';

interface SkillCategory {
  title: string;
  icon: IconName;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [IconComponent, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = [
    {
      title: 'Product & Startup',
      icon: 'compass',
      skills: ['Product Development', 'SaaS', 'Product Launches', 'Startup Operations', 'Business Strategy', 'User Onboarding']
    },
    {
      title: 'Technical',
      icon: 'code',
      skills: ['Angular', 'TypeScript', 'Flutter', 'Firebase', 'Firestore', 'Cloud Functions', 'JavaScript', 'TailwindCSS', 'PWA / Android']
    },
    {
      title: 'Systems',
      icon: 'network',
      skills: ['Automation', 'WhatsApp Integrations', 'OCR Workflows', 'Real-Time Systems', 'Multi-Tenant Architecture', 'Role-Based Access', 'Security Rules', 'UI/UX']
    },
    {
      title: 'Personal',
      icon: 'users',
      skills: ['Leadership', 'Problem Solving', 'Communication', 'Discipline', 'Resilience']
    }
  ];
}
