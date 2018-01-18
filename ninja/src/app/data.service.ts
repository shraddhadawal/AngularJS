import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';﻿
@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
    return this.http.get('https://nn-angular-f35b9.firebaseio.com/.json').map(
      (res)=>res.json()
    )
  }

}
