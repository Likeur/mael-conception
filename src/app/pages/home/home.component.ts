import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroSecComponent } from '../../components/hero-sec/hero-sec.component';
import { ServiceSecComponent } from '../../components/service-sec/service-sec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroSecComponent, ServiceSecComponent],
  templateUrl: './home.component.html',

})
export default class HomeComponent {

}
