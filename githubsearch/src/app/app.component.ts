import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
@Component({
  selector: 'my-app',
  template: `<profile></profile>`,


  
})
export class AppComponent  { 
  constructor(private _githubservice:GithubService){

  }
 }
