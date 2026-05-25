import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent, IconName } from '../ui/icon/icon.component';

interface Project {
  title: string;
  category: string;
  icon: IconName;
  description: string;
  repository: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [IconComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Personal Info / Assistant',
      category: 'Web Application',
      icon: 'layers',
      description: 'A digital assistant concept for daily tasks, routines, and personal organization.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/Personal_Assistant',
      liveUrl: 'https://personal-info-ak.netlify.app/'
    },
    {
      title: 'Expense Tracker',
      category: 'Angular',
      icon: 'wallet',
      description: 'An interface for tracking income, expenses, and spending patterns.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/angular-project',
      liveUrl: 'https://arifulla-kazi-dev.github.io/angular-project/'
    },
    {
      title: 'Gamified Learning Platform',
      category: 'Product Prototype',
      icon: 'rocket',
      description: 'Learning flows supported by quizzes, challenges, and reward mechanics.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/Learning-Platform',
      liveUrl: 'https://learning-platform-zeta-five.vercel.app/home'
    },
    {
      title: 'Smart Traffic Light System',
      category: 'IoT',
      icon: 'network',
      description: 'An RFID and ESP-based concept for emergency vehicle traffic prioritization.',
      repository: 'https://github.com/Arifulla-Kazi/smart-traffic-system',
      liveUrl: 'https://chimerical-pothos-24cd8f.netlify.app/'
    },
    {
      title: 'ESP32 PCB System',
      category: 'Electronics',
      icon: 'network',
      description: 'PCB design integrating an ESP32 core with supporting components for IoT use.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/PCB_ESP32',
      liveUrl: 'https://i.ibb.co/qYgnSCsP/3-D-view-PCB-ESP32.jpg'
    },
    {
      title: 'Traffic Module PCB',
      category: 'Electronics',
      icon: 'network',
      description: 'KiCad schematic and layout work for a traffic light module.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/Traffic%20Module'
    },
    {
      title: 'Learning Dashboard',
      category: 'Web Experience',
      icon: 'document',
      description: 'A simple learning portal covering career paths, subjects, resources, and quizzes.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/Learning_Dashboard',
      liveUrl: 'https://learning-dashboard-c661ec.netlify.app'
    },
    {
      title: 'Amazon Clone',
      category: 'Angular',
      icon: 'code',
      description: 'A responsive e-commerce interface exploration built in Angular.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/amazon-clone-project',
      liveUrl: 'https://arifulla-kazi-dev.github.io/amazon-clone-project/'
    },
    {
      title: 'Recipe Finder',
      category: 'JavaScript',
      icon: 'code',
      description: 'An API-driven recipe search application with an accessible browsing interface.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/Recipe%20Finder',
      liveUrl: 'https://recipe-finder-sscp.netlify.app/'
    },
    {
      title: 'Explore Your Dream Cars',
      category: 'Web Experience',
      icon: 'compass',
      description: 'A vehicle exploration concept for browsing models, accessories, and offers.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/Car_model',
      liveUrl: 'https://car-model-ce4130.netlify.app/'
    },
    {
      title: 'Customizable Pizza Page',
      category: 'JavaScript',
      icon: 'code',
      description: 'A customization interface for selecting pizza sizes and toppings.',
      repository: 'https://github.com/Arifulla-Kazi-Dev/MyProjects/tree/main/Pizza',
      liveUrl: 'https://steady-swan-96bff1.netlify.app/'
    }
  ];
}
