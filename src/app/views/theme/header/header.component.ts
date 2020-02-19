import { Component, OnInit } from '@angular/core';
import { faCoffee, faUserCircle  } from '@fortawesome/free-solid-svg-icons';
import {UsersModel} from '../../pages/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: UsersModel = new UsersModel();
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  faCoffee = faCoffee;
  faUserCircle = faUserCircle;
  ngOnInit() {
  }

}
