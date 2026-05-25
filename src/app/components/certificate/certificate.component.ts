import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { IconComponent, IconName } from '../ui/icon/icon.component';

interface CredentialLink {
  label: string;
  url: string;
}

interface Credential {
  title: string;
  issuer: string;
  icon: IconName;
  summary: string;
  links?: CredentialLink[];
}

@Component({
  selector: 'app-certificate',
  imports: [IconComponent, RevealDirective],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {
  readonly credentials: Credential[] = [
    {
      title: 'Entrepreneurship Development Programme',
      issuer: 'EDII Ahmedabad / EDC Limited',
      icon: 'rocket',
      summary: 'Entrepreneurship certification supporting business fundamentals and venture-building knowledge.'
    },
    {
      title: 'Python Certifications',
      issuer: 'Coursera coursework',
      icon: 'terminal',
      summary: 'Programming foundations, web data, data structures, and database work.',
      links: [
        {
          label: 'Python for Everybody',
          url: 'https://github.com/Arifulla-Kazi-Dev/Certifications/blob/main/Python%20For%20Everybody.pdf'
        },
        {
          label: 'Web Data',
          url: 'https://github.com/Arifulla-Kazi-Dev/Certifications/blob/main/Using%20Python%20to%20Access%20Web%20Data.pdf'
        }
      ]
    },
    {
      title: 'JavaScript',
      issuer: 'Web development coursework',
      icon: 'code',
      summary: 'Core JavaScript concepts supporting interactive product experiences.',
      links: [
        {
          label: 'View certificate',
          url: 'https://github.com/Arifulla-Kazi-Dev/Certifications/blob/main/JavaScript%20course.jpg'
        }
      ]
    },
    {
      title: 'PCB Design with Altium Designer',
      issuer: 'Electronics design coursework',
      icon: 'network',
      summary: 'Schematic and PCB layout grounding from an ECE engineering pathway.',
      links: [
        {
          label: 'View certificate',
          url: 'https://github.com/Arifulla-Kazi-Dev/Certifications/blob/main/PCB%20Designing%20by%20Altium%20Designer.jpg'
        }
      ]
    },
    {
      title: 'Leadership and Team Effectiveness',
      issuer: 'NPTEL',
      icon: 'award',
      summary: 'Foundations in leadership, collaboration, and team effectiveness.',
      links: [
        {
          label: 'View certificate',
          url: 'https://github.com/Arifulla-Kazi-Dev/Certifications/blob/main/Leadership.jpg'
        }
      ]
    }
  ];
}
