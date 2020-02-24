import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersModel} from '../../pages/users.model';

@Component({
  selector: 'app-blood-bank-subheader',
  templateUrl: './blood-bank-subheader.component.html',
  styleUrls: ['./blood-bank-subheader.component.css']
})
export class BloodBankSubheaderComponent implements OnInit {

  public user: UsersModel = new UsersModel();
  constructor(
    public router: Router,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }


  ngOnInit() {
  }

}
