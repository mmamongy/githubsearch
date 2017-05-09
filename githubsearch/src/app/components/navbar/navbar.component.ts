import { Component } from '@angular/core';
@Component({
  /*module id for relative path*/ 
  moduleId: module.id,
  selector: 'navbar',
  templateUrl:'navbar.component.html',


  
})
export class NavbarComponent  { 
  private projectname: string; 
  constructor() {
    this.projectname = "A2WebSite" ;
  }
 }
