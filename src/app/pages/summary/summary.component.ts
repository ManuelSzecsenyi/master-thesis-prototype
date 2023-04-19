import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(
    public stateService: StateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  startNewGame() {
    this.router.navigate(['/']);
  }

}
