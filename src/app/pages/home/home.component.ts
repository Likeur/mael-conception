import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSecComponent } from '../../components/hero-sec/hero-sec.component';
import { ServiceSecComponent } from '../../components/service-sec/service-sec.component';
import { ClientSecComponent } from '../../components/client-sec/client-sec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroSecComponent, ServiceSecComponent, ClientSecComponent],
  templateUrl: './home.component.html',

})
export default class HomeComponent {

}
