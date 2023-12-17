import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-hero-sec',
  standalone: true,
  imports: [],
  templateUrl: './hero-sec.component.html',
})
export class HeroSecComponent {

  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline()

    tl.from('.first-div',{
      scale:1.4,
      opacity:0,
      duration:1
    }).from('.second-div',{
      scale:1.4,
      opacity:0,
      duration:1
    })

    gsap.from('.text-div',{
      scale:1.4,
      opacity:0,
      duration:1
    })
    gsap.from('.trusted-company',{
      scrollTrigger : {
        trigger : '.trusted-company',
        start: 'top 80%',
        end:'top center',
        scrub: true
      },
      scale:0,
      duration:1
    })

  }
}
