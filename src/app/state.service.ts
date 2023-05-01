import { Injectable } from '@angular/core';
import { IState } from './models/state.model';
import { IEvent, IOption } from './models/event.model';
import { GAME_CONFIG, IGameConfig } from './models/config.model';
import { Router } from '@angular/router';
import { QuestionService } from './services/question.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state: IState = DEMO_STATE;

  gameConfig: IGameConfig = GAME_CONFIG

  /**
   * Empty list of events. 
   * Will be filled to track the players decisions throughout the game
   */
  decisionHistory: IEvent[] = [];

  constructor(
    private router: Router,
  ) { }

  public reset() {
    this.state = NEW_GAME_STATE;
    this.decisionHistory = [];
  }

  public makeDecision(event: IEvent, decision: IOption): number[] {

    let moneyImpact = 0, lpImpact = 0;

    console.log("--------------------");

    // Check if the event has a insurance precondition
    if(event.insurance) {
      // Check if the precondition is met
      if(event.insurance == 'APARTMENT' && this.state.insurance.apartment) {
        // No impact 
      } else if(event.insurance == 'PHONE' && this.state.insurance.phone) {
        // No impact
      } else if(event.insurance == 'LAW' && this.state.insurance.law) {
        // No impact
      } else {
        // No insurance, handle impact
      [moneyImpact, lpImpact] = this.handleDecisionImpact(decision);
      }

    } else {
      [moneyImpact, lpImpact] = this.handleDecisionImpact(decision);
    }

    // Update the event list
    event.decision = decision;
    this.decisionHistory.push(event);

    // Handle money & lifepoints changes every 5 rounds
    if (this.state.round % 5 === 0) {
      console.log("Player received budget after salary: " + this.getMonthlyBudget());
      this.state.money += this.getMonthlyBudget()
      
      console.log("Player received monthly life points: " + this.getMonthlyLifePoints());
      this.state.lifepoints += this.getMonthlyLifePoints();

      window.alert("Du hast dein Gehalt erhalten: " + this.getMonthlyBudget() + "€. Durch den Stress in der Arbeit hast du " + this.getMonthlyLifePoints() + " Lebenspunkte verloren.");
    }

    // Handle investments every 10 rounds
    if (this.state.round % 10 === 0) {
      console.log("Investment round");
      this.router.navigate(['/investments']);
    }

    // Max life points is 100
    this.capLifePoints();

    // Check for game over
    this.checkForGameOver();

    // Check for game won
    if(this.state.round >= 2) {
      this.router.navigate(['/summary']);
    }

    console.log("Vermögen: ", this.state.money, "LP: ", this.state.lifepoints);
    return [moneyImpact, lpImpact];
  }

  startGame() {
    if( !this.canStartGame() ) return;

    // Choose starting budget
    if(this.state.university) {
      this.state.money = 1000;
    } else {
      this.state.money = 5000;
    }

    console.log("Starting game");
    this.router.navigate(['/game']);
  }

  /**
   *  Returns the price of the insurance
   *  Add all prices of the insurance options if set to true
   */
  getInsurancePrice() {

    let price = 0;

    if (this.state.insurance.apartment) price += 15;
    if (this.state.insurance.law) price += 10;
    if (this.state.insurance.phone) price += 15;

    return price;

  }

  getMobilityPrice() { 
    let price = 0;

    if (this.state.mobility.bike) price += 10;
    if (this.state.mobility.car) price += 300;
    if (this.state.mobility.publicTransport) price += 31;

    return price;
  }

  getMonthlyBudget() {
    return (this.state.job?.salary ?? 0)  - (this.state.apartment?.rent ?? 0) - this.getInsurancePrice() - this.getMobilityPrice() - 380;
  }

  getMonthlyLifePoints() {
    return (this.state.job?.stress ?? 0) - (this.state.apartment?._internalDistanceFactor ?? 0);
  }

  private capLifePoints() {
    if (this.state.lifepoints > 100) this.state.lifepoints = 100;
  }

  private handleDecisionImpact(decision: IOption): number[] {

    // Update the money
    this.state.money += decision.financialImpact
    console.log("Player money impact: " + decision.financialImpact)

    // Update the life points
    this.state.lifepoints += decision.lifeImpact;
    console.log("Player life points impact: " + decision.lifeImpact)

    return [decision.financialImpact, decision.lifeImpact];
  }     

  /**
   * Game over is when 
   * life point < 50
   * money < 0
   */
  private checkForGameOver() {
    if(this.state.lifepoints < 50 || this.state.money < 0) {
      this.router.navigate(['/game-over']);
    }
  }

  private canStartGame() { 

    if( this.state.name === '' ) alert('Du musst einen Namen eingeben');
    if( this.state.job === undefined ) alert('Du musst einen Job auswählen');
    if( this.state.apartment === undefined ) alert('Du musst eine Wohnung auswählen');
    if( this.getMonthlyBudget() <= 0 ) alert('Dein Budget ist nicht positiv. Du musst mehr verdienen oder weniger ausgeben. (Wohnung, Versicherung, Mobilität');

    return (
      this.state.name !== '' &&
      this.state.job !== undefined &&
      this.state.apartment !== undefined &&
      this.getMonthlyBudget() > 0
    );
  }

  
}


export const NEW_GAME_STATE: IState = {
    name: "",
    insurance: {
        apartment: false,
        phone: false,
        law: false
    },
    mobility: {
        car: false,
        bike: false,
        publicTransport: false
    },
    lifepoints: 100,
    money: 0,
    university: false,
    avatar: "",
    job: undefined,
    apartment: undefined,
    round: 0
}

export const DEMO_STATE: IState = {
  name: "Manuel",
  insurance: {
      apartment: true,
      phone: false,
      law: false
  },
  mobility: {
      car: false,
      bike: false,
      publicTransport: false
  },
  lifepoints: 100,
  money: 1000,
  university: false,
  avatar: "https://api.dicebear.com/5.x/adventurer/svg?seed=Garfield",
  job: {
      name: "Einzelhandel",
      description: "Du verkaufst Waren im Einzelhandel",
      salary: 1820,
      stress: 5,
      universityNeded: false,
      imgUrl: "https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-duotone/drinks/coffee/coffee-shop-cashier-2-1-pp04tp5cb4pjkph623cnqo.png?_a=AJAMhWI0"
  },
  apartment: {
      name: "Wohnwagen",
      distance: 50,
      _internalDistanceFactor: 10,
      rent: 300,
      imgUrl: "https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-duotone/real-estate-construction/houses/house-4-le4cusoc1c7tee903j8ew.png?_a=AJAMhWI0"
  },
  round: 0
}