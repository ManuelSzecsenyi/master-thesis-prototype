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

  canStartGame() { 

    if( this.state.state.name === '' ) alert('Du musst einen Namen eingeben');
    if( this.state.state.job === undefined ) alert('Du musst einen Job auswählen');
    if( this.state.state.apartment === undefined ) alert('Du musst eine Wohnung auswählen');
    if( this.state.getMonthlyBudget() <= 0 ) alert('Dein Budget ist nicht positiv. Du musst mehr verdienen oder weniger ausgeben. (Wohnung, Versicherung, Mobilität');

    return (
      this.state.state.name !== '' &&
      this.state.state.job !== undefined &&
      this.state.state.apartment !== undefined &&
      this.currentPage === 6 &&
      this.state.getMonthlyBudget() > 0
    );
  }

  startGame() {
    if( !this.canStartGame() ) return;

    // Choose starting budget
    if(this.state.state.university) {
      this.state.state.money = 1000;
    } else {
      this.state.state.money = 5000;
    }

    console.log("Starting game");
    this.router.navigate(['/game']);
  }

}
