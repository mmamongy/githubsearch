import {Injectable} from '@angular/core' ;
import {Http, Headers} from '@angular/http' ;
import 'rxjs/add/operator/map' ;

@Injectable()

export class GithubService {
    private username:string ;
    constructor(private _http:Http){
        console.log("git hub service working...") ;
        this.username = "mmamongy" ;
    }
    getuser(){
        return this._http.get("https://api.github.com/users/"+this.username)
        .map(res => res.json()) ;
    }
    
}