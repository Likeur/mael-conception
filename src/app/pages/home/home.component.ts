import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSecComponent } from '../../components/hero-sec/hero-sec.component';
import { ServiceSecComponent } from '../../components/service-sec/service-sec.component';
import { ClientSecComponent } from '../../components/client-sec/client-sec.component';
import { PortfolioSecComponent } from '../../components/portfolio-sec/portfolio-sec.component';
import { FooterSecComponent } from '../../components/footer-sec/footer-sec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroSecComponent, ServiceSecComponent,PortfolioSecComponent, ClientSecComponent, FooterSecComponent],
  templateUrl: './home.component.html',

})
export default class HomeComponent {}
