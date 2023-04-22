import { Component, OnInit } from '@angular/core';
import { ILiving } from 'src/app/models/living.model';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-living',
  templateUrl: './ob-living.component.html',
  styleUrls: ['./ob-living.component.scss']
})
export class ObLivingComponent implements OnInit {

  LIVING_LIST = LIVING_LIST;

  constructor(
    public state: StateService,
  ) { }

  ngOnInit(): void {
  }

}

export const LIVING_LIST: ILiving[] = [
  {
    name: "Wohnwagen",
    distance: 50,
    _internalDistanceFactor: 10,
    rent: 400,
    imgUrl: 'house-4.png'
  },
  {
    name: "City Apartment",
    distance: 5,
    _internalDistanceFactor: 1,
    rent: 1000,
    imgUrl: 'apartment.png'
  },
  {
    name: "Vorstadthaus",
    distance: 15,
    _internalDistanceFactor: 3,
    rent: 1550,
    imgUrl: 'house-15.png'
  },
  {
    name: "Kleines Apartment",
    distance: 10,
    _internalDistanceFactor: 8,
    rent: 650,
    imgUrl: 'book-shelf.png'
  }
]