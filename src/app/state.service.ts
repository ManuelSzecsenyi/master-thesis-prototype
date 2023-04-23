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

  public makeDecision(event: IEvent, decision: IOption) {

    console.log("--------------------");
    
    // Update the money
    this.state.money += decision.financialImpact
    console.log("Player received money: " + decision.financialImpact)

    // Update the life points
    this.state.lifepoints += decision.lifeImpact;
    console.log("Player received life points: " + decision.lifeImpact)

    // Update the event list
    event.decision = decision;
    this.decisionHistory.push(event);

    // Handle money & lifepoints changes every 5 rounds
    if (this.state.round % 5 === 0) {
      console.log("Player received budget after salary: " + this.getMonthlyBudget());
      this.state.money += this.getMonthlyBudget()
      
      console.log("Player received monthly life points: " + this.getMonthlyLifePoints());
      this.state.lifepoints += this.getMonthlyLifePoints();
    }

    // Handle investments every 15 rounds
    if (this.state.round % 15 === 0) {
      console.log("Investment round");
      this.router.navigate(['/investments']);
    }

    // Max life points is 100
    this.capLifePoints();

    // Check for game over
    this.checkForGameOver();

  }

  public createNewGame(demo?: boolean) {

    if (demo) { 
      this.state = DEMO_STATE;
      return;
    }

    this.state = {
      name: '',
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
      money: 1000,
      university: false,
      round: 0,
    }
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
    return 20 - (this.state.job?.stress ?? 0) - (this.state.apartment?._internalDistanceFactor ?? 0);
  }

  private capLifePoints() {
    if (this.state.lifepoints > 100) this.state.lifepoints = 100;
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