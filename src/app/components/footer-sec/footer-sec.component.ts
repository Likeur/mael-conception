import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-sec',
  standalone: true,
  imports: [],
  templateUrl: './footer-sec.component.html',
  styles: ``
})
export class FooterSecComponent {

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
