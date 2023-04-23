import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  currentPage = 0

  constructor(
    private state: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.state.reset();
  }

  public btnClicked(number: number) {
    this.currentPage += number;
  }

  public startGame() {
    this.state.startGame();
  }
}
