import { Component, OnInit } from '@angular/core';
import { IAvatar } from 'src/app/models/avatar.model';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-profile',
  templateUrl: './ob-profile.component.html',
  styleUrls: ['./ob-profile.component.scss']
})
export class ObProfileComponent implements OnInit {

  name = '';

  AVATAR_LIST = AVATAR_LIST;

  constructor(
    public state: StateService,
  ) { }

  ngOnInit(): void {
  }


}


export const AVATAR_LIST: IAvatar[] = [
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Garfield' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Midnight' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Peanut' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Cuddles' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Kitty' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Abby' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Snowball' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Sheba' },
    { imgUrl: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Pepper' },
]