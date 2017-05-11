import { Component } from '@angular/core';
import {GithubService} from '../services/github.service' ;
import 'rxjs/add/operator/map';
@Component({
  moduleId: module.id ,
  selector: 'profile',
  templateUrl: `profile.component.html`,
  
})
export class ProfileComponent  {  
  user[];
  constructor(private _githubservice: GithubService){
    this._githubservice.getuser().subscribe(user => {
      this.user = user ;
    })
  }

}
