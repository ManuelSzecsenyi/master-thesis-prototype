import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-insurance',
  templateUrl: './ob-insurance.component.html',
  styleUrls: ['./ob-insurance.component.scss']
})
export class ObInsuranceComponent implements OnInit {

  constructor(
    public state: StateService,
  ) { }

  ngOnInit(): void {
  }

}
