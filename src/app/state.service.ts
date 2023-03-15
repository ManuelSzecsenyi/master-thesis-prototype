import { Injectable } from '@angular/core';
import { IState } from './models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state!: IState;

  constructor() { }

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
      university: false
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
    }
}