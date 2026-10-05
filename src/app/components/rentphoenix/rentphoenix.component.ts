import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { BrandLogoComponent } from '../ui/brand-logo/brand-logo.component';
import { IconComponent, IconName } from '../ui/icon/icon.component';

interface ProductFeature {
  icon: IconName;
  title: string;
  description: string;
}

interface ProductFact {
  label: string;
  value: string;
}

const COMPANY_URL = 'https://arifulla-kazi-dev.github.io/rentphoenix-company-website/';

@Component({
  selector: 'app-rentphoenix',
  imports: [BrandLogoComponent, IconComponent, RevealDirective],
  templateUrl: './rentphoenix.component.html',
  styleUrl: './rentphoenix.component.css'
})
export class RentphoenixComponent {
  readonly companyUrl = COMPANY_URL;
  readonly companyLinkedInUrl = 'https://www.linkedin.com/company/rent-phoenix/';

  readonly recognitions = ['CIBA Goa Incubated', 'Startup India', 'DPIIT Recognized'];

  readonly practiceAreas = [
    'Custom Software',
    'Web & Mobile Apps',
    'AI & Automation',
    'Enterprise Platforms',
    'Government Solutions'
  ];

  readonly rentPhoenixOs = {
    webAppUrl: 'https://www.rentphoenixos.in/listing',
    siteUrl: 'https://www.rentphoenixos.in',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=in.rentphoenixos.www.twa',
    productPageUrl: `${COMPANY_URL}products`,
    facts: [
      { label: 'Status', value: 'Live in production' },
      { label: 'Platforms', value: 'Web · Android · iOS soon' },
      { label: 'Stack', value: 'Angular · Flutter · Firebase' }
    ] as ProductFact[],
    features: [
      {
        icon: 'bell',
        title: 'WhatsApp rent reminders',
        description: 'Automated rent-due and payment-confirmation reminders, running for real landlords and tenants.'
      },
      {
        icon: 'wallet',
        title: 'Real-time rent tracking',
        description: 'Mark rent paid, pending, or overdue in one tap. Landlord and tenant see the same live status.'
      },
      {
        icon: 'document',
        title: 'Agreement scanner',
        description: 'Upload a photo or PDF of a rental agreement and it is digitized automatically with OCR.'
      },
      {
        icon: 'lock',
        title: 'Document locker',
        description: 'Agreements, ID copies, and receipts stored securely with role-based access per account.'
      },
      {
        icon: 'chart',
        title: 'QR payments & analytics',
        description: 'UPI and QR payment tracking with collection-rate analytics across the whole portfolio.'
      },
      {
        icon: 'users',
        title: 'Maintenance & chat',
        description: 'In-app maintenance requests, a trusted vendor directory, and direct landlord-tenant messaging.'
      }
    ] as ProductFeature[]
  };

  readonly coFounder = {
    appUrl: 'https://arifulla-kazi-dev.github.io/Expense-Tracker-for-Founders/',
    productPageUrl: `${COMPANY_URL}products/co-founder`,
    facts: [
      { label: 'Stage', value: 'Early product, live' },
      { label: 'Type', value: 'Multi-tenant web app' },
      { label: 'Stack', value: 'Angular · Firebase · Tailwind' }
    ] as ProductFact[],
    features: [
      {
        icon: 'chart',
        title: 'Live runway',
        description: 'Funding and spend in one ledger, with runway and burn computed live.'
      },
      {
        icon: 'calendar',
        title: 'Compliance calendar',
        description: 'GST, ROC filings, and renewals that auto-advance when marked done.'
      },
      {
        icon: 'users',
        title: 'Team & role access',
        description: 'Ten roles, from co-founder to CA, with permissions enforced at the database.'
      },
      {
        icon: 'wallet',
        title: 'Expenses & payroll',
        description: 'Recurring costs, auto-billing, salaries, and stipends against monthly commitments.'
      }
    ] as ProductFeature[]
  };
}
