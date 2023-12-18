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

  toggleNav(){
    const navbar = document.querySelector('#navigation')!
    const barUn = document.querySelector('#bar-1')!
    const barDeux = document.querySelector('#bar-2')!

    navbar.classList.toggle('-translate-y-[70rem]')
    barUn.classList.toggle('rotate-45')
    barDeux.classList.toggle('-rotate-45')
    barDeux.classList.toggle('mt-2')
  }
}
