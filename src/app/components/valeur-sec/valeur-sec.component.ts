import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
@Component({
  selector: 'app-valeur-sec',
  standalone: true,
  imports: [],
  templateUrl: './valeur-sec.component.html',
  styles: ``
})
export class ValeurSecComponent {

  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.val-img',{
      scrollTrigger : {
        trigger : '.val-img',
        start: 'top 70%',
        end:'top center',
        scrub: true
      },
      x:-80,
      opacity:0,
      duration:1
    })
  
    gsap.from('.head-val',{
      scrollTrigger : {
        trigger : '.head-val',
        start: 'top 90%',
        end:'top 70%',
        scrub: true
      },
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.val-1',{
      scrollTrigger : {
        trigger : '.val-1',
        start: 'top 90%',
        end:'top 70%',
        scrub: true
      },
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.val-2',{
      scrollTrigger : {
        trigger : '.val-2',
        start: 'top 90%',
        end:'top 70%',
        scrub: true
      },
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.val-3',{
      scrollTrigger : {
        trigger : '.val-3',
        start: 'top 90%',
        end:'top 70%',
        scrub: true
      },
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.val-4',{
      scrollTrigger : {
        trigger : '.val-4',
        start: 'top 90%',
        end:'top 70%',
        scrub: true
      },
      x:50,
      opacity:0,
      duration:1
    })
    
  }
}
