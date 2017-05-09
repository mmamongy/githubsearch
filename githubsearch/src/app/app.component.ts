import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component' ;

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>`,


  
})
export class AppComponent  { name = 'Angular'; }
