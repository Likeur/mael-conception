import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-service-sec',
  standalone: true,
  imports: [],
  templateUrl: './service-sec.component.html',
  styles: ``
})
export class ServiceSecComponent {

  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.head-text',{
      scrollTrigger : {
        trigger : '.head-text',
        start: 'top 70%',
        end:'top center',
        
      },
      scale:0,
      duration:1
    })
    gsap.from('.middle-line',{
      scrollTrigger : {
        trigger : '.middle-line',
        start: 'top 70%',
        end:'top -50%',
        
      },
      height:'0px'
    })
    gsap.from('.number-1',{
      scrollTrigger : {
        trigger : '.number-1',
        start: 'top 90%',
        end:'top 70%',
        
      },
      scale:0,
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.number-2',{
      scrollTrigger : {
        trigger : '.number-2',
        start: 'top 90%',
        end:'top 70%',
        
      },
      scale:0,
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.number-3',{
      scrollTrigger : {
        trigger : '.number-3',
        start: 'top 95%',
        end:'top 70%',
       
      },
      scale:0,
      x:50,
      opacity:0,
      duration:1
    })
    gsap.from('.number-4',{
      scrollTrigger : {
        trigger : '.number-4',
        start: 'top 95%',
        end:'top 70%',
        
      },
      scale:0,
      x:50,
      opacity:0,
      duration:1
    })
  }
}
