import { Component } from '@angular/core';

@Component({
  selector: 'app-client-sec',
  standalone: true,
  imports: [],
  templateUrl: './client-sec.component.html',
})
export class ClientSecComponent {
  testimonials = [
    {
      description : "Travailler avec Vander de l'agence Maël Conception, est une des meilleures décisions que j’ai pris dans mon projet d’offrir à la RDC la plus grande bibliothèque numérique.",
      name: "PATRICK SALUMU (WA NGONGO)",
      profil : "Co-fondateur Congo Mémoire",
      linkprofile: "https://mael-conception.com/images/testimony/patricksalumu.jpg"
    },
    {
      description : "J'ai été très satisfait du travail de Vander avec son équipe dans la conception de mon site web. Le site web est facile à utiliser et à naviguer, et il est très bien conçu. Je suis très content du résultat et je le recommanderais à quiconque cherche à créer un site web.",
      name: "BEIGINE NGOY",
      profil : "Directeur de Phoenix Travel",
      linkprofile: "https://mael-conception.com/images/testimony/beigine.jpg"
    },
    {
      description : "J'ai toujours été très impressionné par la qualité du travail de l'agence Maël conception. Nous travaillons avec eux sur plusieurs projets web et mobile en sous-traitance, ils ont toujours été très professionnels et à l'écoute de nos besoins.",
      name: "ENOCH NGOMELA",
      profil : "Co-fondateur ENOC SARL",
      linkprofile: "https://mael-conception.com/images/testimony/henoc.png"
    }
  ]
}
