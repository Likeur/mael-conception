import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks = [
    {
      title : "Acceuil",
      path : "acceuil"
    },
    {
      title : "Services",
      path : "service"
    },
    {
      title : "Valeurs",
      path : "valeurs"
    },
    {
      title : "Portfolio",
      path : "portfolio"
    },
    {
      title : "Clients",
      path : "client"
    },
    {
      title : "Podcast",
      path : "podcast"
    }
  ]
}
