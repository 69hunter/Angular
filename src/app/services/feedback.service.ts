import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { Feedback } from '../shared/feedback';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(Feedbacks: Feedback): Observable <Feedback[]> {
    return this.restangular.all('feedback').post(Feedbacks);
  }

}
