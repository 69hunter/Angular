import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  /* service with Promise
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeaders(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
  */

  /* service with promise and delay
  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve=>{
      // Simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS), 2000);
    });
  }

  getFeaturedLeaders(): Promise<Leader> {
    return new Promise(resolve=>{
      // Simulate server latency with 2 second delay
      setTimeout(()=>resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    });
  }
  */

  // getLeaders(): Observable<Leader[]> {
  //   return Observable.of(LEADERS).delay(2000);
  // }
  //
  // getLeader(id: number): Observable<Leader> {
  //   return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]).delay(2000);
  // }
  //
  // getFeaturedLeaders(): Observable<Leader> {
  //   return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  // }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return  this.restangular.one('leaders',id).get();
  }

  getFeaturedLeaders(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
  }
}
