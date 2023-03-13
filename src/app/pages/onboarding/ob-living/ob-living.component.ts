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
    rent: 300,
    imgUrl: 'https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-duotone/real-estate-construction/houses/house-4-le4cusoc1c7tee903j8ew.png?_a=AJAMhWI0'
  },
  {
    name: "City Apartment",
    distance: 5,
    _internalDistanceFactor: 1,
    rent: 950,
    imgUrl: 'https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-duotone/real-estate-construction/houses/apartment-uelzy1pem3kdqy6ku5ahr.png?_a=AJAMhWI0'
  },
  {
    name: "Vorstadthaus",
    distance: 15,
    _internalDistanceFactor: 3,
    rent: 1550,
    imgUrl: 'https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-duotone/real-estate-construction/houses/house-15-4rrwvr3p21gb57p8kr1k.png?_a=AJAMhWI0'
  },
  {
    name: "Kleines Apartment",
    distance: 10,
    _internalDistanceFactor: 5,
    rent: 550,
    imgUrl: 'https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/l_watermark_mnkze9/o_30/c_scale,w_181/fl_layer_apply,x_0,y_133/v1/icons/illustrations-duotone/furniture-objects/furnitures/book-shelf-slpy57g8k9pmufeluloin.png?_a=AJAMhWI0'
  }
]