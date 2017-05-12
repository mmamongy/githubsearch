import { Component } from '@angular/core';
import {GithubService} from '../services/github.service' ;
import 'rxjs/add/operator/map';
@Component({
  moduleId: module.id ,
  selector: 'profile',
  templateUrl: `profile.component.html`,
  
})
export class ProfileComponent  {  
  user : any[];
  repos: Array<any>;
  username: string ;
  constructor(private _githubservice: GithubService){
    this._githubservice.getuser().subscribe(user => {
      this.user = [] ;
    }) 
    this._githubservice.getrepos().subscribe(repos => {
      this.repos = repos ;
    })
  }

  searchUser(){
    this._githubservice.updateUser(this.username) ;

    this._githubservice.getuser().subscribe(user => {
      this.user = user ;
    })

    this._githubservice.getrepos().subscribe(repos => {
      this.repos = repos ;
    })
 
 }

}
