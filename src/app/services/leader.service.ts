import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

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

  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getFeaturedLeaders(): Observable<Leader> {
    return Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }
}
