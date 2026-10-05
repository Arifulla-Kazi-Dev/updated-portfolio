import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { BusinessCardComponent } from '../business-card/business-card.component';
import { CertificateComponent } from '../certificate/certificate.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperienceComponent } from '../experience/experience.component';
import { HeroComponent } from '../hero/hero.component';
import { JourneyComponent } from '../journey/journey.component';
import { ProjectsComponent } from '../projects/projects.component';
import { RentphoenixComponent } from '../rentphoenix/rentphoenix.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    RentphoenixComponent,
    JourneyComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificateComponent,
    ProjectsComponent,
    BusinessCardComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
