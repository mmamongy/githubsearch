import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';
import {HttpModule} from '@angular/http';
@Component({
  selector: 'my-app',
  template: `<profile></profile>`,
  providers: [HttpModule]
  
})
export class AppComponent  { 
  constructor(private _githubservice:GithubService){

  }
 }
