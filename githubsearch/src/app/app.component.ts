import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
import {HttpModule} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [HttpModule]
  
})
export class AppComponent  { 
  constructor(private _githubservice:GithubService){

  }
 }
