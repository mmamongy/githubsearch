import {Injectable} from '@angular/core' ;
import {Http, Headers} from '@angular/http' ;
import 'rxjs/add/operator/map' ;

@Injectable()

export class GithubService {
    private username:string ;
    constructor(){
        console.log("git hub service working...") ;
        this.username = "maryammamdouh" ;
    }
    
}