import { Component, OnInit } from '@angular/core';
import { faCoffee, faUserCircle  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  faCoffee = faCoffee;
  faUserCircle = faUserCircle;
  ngOnInit() {
  }

}
