import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
@Component({
  selector: 'app-portfolio-sec',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-sec.component.html',
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

  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.work-text',{
      scrollTrigger : {
        trigger : '.work-text',
        start: 'top 70%',
        end:'top center',
        scrub: true
      },
      scale:0,
      duration:1
    })

    gsap.from('.portolio-box',{
      scrollTrigger : {
        trigger : '.portolio-box',
        start: 'top 70%',
        end:'top center',
        scrub: true
      },
      scale:0,
      duration:1
    })
    gsap.from('.cta-card',{
      scrollTrigger : {
        trigger : '.cta-card',
        start: 'top 70%',
        end:'top center',
        scrub: true
      },
      x:50,
      opacity:0,
      duration:1
    })
    
  }
}
