import { Component } from '@angular/core';
import { NavComponent } from './nav/app.navComponent';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { DirectoresComponent } from './directores/app.directoresComponent';
import {
  trigger,
  state,
  style,
  animate,
  transition  
} from '@angular/animations';






@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  /* styleUrls: ['./app.component.css'] */
  animations:[
    trigger('rotar',[
      state('small',style({
        transform: 'scale(1)',
      })),
      state('large',style({
        transform: 'scale(1.2)',
      })),
      transition('small => large', animate('300ms ease-in')),
    ]),
  ]
})


export class AppComponent {

  state:string= 'small'

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
