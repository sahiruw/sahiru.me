import { FeedbacksService } from './../services/feedbacks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private feedbacksService: FeedbacksService) { }

  ngOnInit() {
    this.feedbacksService.getTopFeedbacks()
  }

}
