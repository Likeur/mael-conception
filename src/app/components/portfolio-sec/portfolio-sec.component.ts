import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-sec',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-sec.component.html',
  styles: ``
})
export class PortfolioSecComponent {
  Project = [
    {
      name : "bangwela-service",
      photo: "https://mael-conception.com/images/portfolio/bangwela-service.png",
    },
    {
      name : "Congo-Memoire",
      photo: "https://mael-conception.com/images/portfolio/congo-memoire.png",
    },
    {
      name : "May-delice",
      photo: "https://mael-conception.com/images/portfolio/may-delice.png",
    },
    {
      name : "imnc",
      photo: "https://mael-conception.com/images/portfolio/imnc.png",
    },
    {
      name : "phoenix-travel",
      photo: "https://mael-conception.com/images/portfolio/phoenix-travel.png",
    }
  ]
}
