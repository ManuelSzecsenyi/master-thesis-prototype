import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  currentPage = 6

  constructor(
    private state: StateService,
  ) { }

  ngOnInit(): void {
    this.state.createNewGame();
  }

  public btnClicked(number: number) {
    this.currentPage += number;
    console.log(this.state.state);
  }

  canStartGame() { 
    return false
  }

}
