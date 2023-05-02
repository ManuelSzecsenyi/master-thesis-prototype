import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss']
})
export class InvestComponent implements OnInit {

  moneySaved: number = 100;
  moneyForEducation: number = 0;
  moneyForEntertainment: number = 0;
  total = this.moneyForEducation + this.moneyForEntertainment;

  sliderOptions: Options = {
    floor: 0,
    ceil: this.stateService.state.money,
    step: 100,
    showTicks: true
  }

  constructor(
    public stateService: StateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Called when the slider value changes
   * All three slider values in same shall not be greater then the players money
   */
  onSliderChange() {

    this.total = this.moneyForEducation + this.moneyForEntertainment;    

    while(this.total > this.stateService.state.money) {
      
      this.moneyForEducation -= 100;
      this.moneyForEntertainment -= 100;
      this.total = this.moneyForEducation + this.moneyForEntertainment;

    }
  }

  getNewSalary() {
    //@ts-ignore
    return this.stateService.state.job.salary + this.getSalaryDelta();
  }

  getNewLifePoints() { 
    const lp = this.stateService.state.lifepoints + this.getLifePointDelta();
    if (lp > 100) return 100;

    return lp;
  }

  getLifePointDelta() {
    return this.moneyForEntertainment / 100;
  }

  getSalaryDelta() { 
    return this.moneyForEducation * 0.3;
  }

  invest() {
      
      this.stateService.state.money -= this.total;
      this.stateService.state.job!.salary = this.getNewSalary();
      this.stateService.state.lifepoints = this.getNewLifePoints();
  
      this.router.navigate(['/game']);
  }
}
