import {Component, OnInit} from '@angular/core';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  animations: [
    trigger('open-side-nav', [
      state('close', style({display: 'none'})),
      state('open', style({display: 'block'}))
    ])
  ]
})
export class SideNavigationComponent implements OnInit {

  openClose = 'close';

  constructor() {
  }

  ngOnInit() {
  }

  openCloseSideNavigation() {
    this.openClose = this.openClose === 'close' ? 'open' : 'close';
  }
}
