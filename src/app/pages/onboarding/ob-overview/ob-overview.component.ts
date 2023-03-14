import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-overview',
  templateUrl: './ob-overview.component.html',
  styleUrls: ['./ob-overview.component.scss']
})
export class ObOverviewComponent implements OnInit {

  constructor(
    public state: StateService
  ) { }

  ngOnInit(): void {
  }

}
