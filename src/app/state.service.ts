import { Injectable } from '@angular/core';
import { IState } from './models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state!: IState;

  constructor() { }

  public createNewGame() {
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
      university: false
    }
  }

  /**
   * Creates a new game with an predefined state
   
  public createNewGame(name: string, job: any, home: any, insurance: any, mobility: any) {
    this.state = {
      name:  name,
      job:  job,
      home:  home,
      insurance:  insurance,
      mobility:  mobility,
      lifepoints: 100,
      money: 1000
    }
  }
  
  */
}
