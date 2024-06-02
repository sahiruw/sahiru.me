import { Injectable } from '@angular/core';
import { Feedback } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor() { }

  getTopFeedbacks() : Feedback[] {
    return [
      {
        id: 1,
        name: 'John Doe',
        feedback: 'Great service!',
        rating: 5,
        source: 'Google'
      },
      {
        id: 2,
        name: 'Jane Doe',
        feedback: 'Excellent service!',
        rating: 5,
        source: 'Facebook'
      },
      {
        id: 3,
        name: 'John Smith',
        feedback: 'Good service!',
        rating: 4,
        source: 'Google'
      }
    ];
  }
  
}
