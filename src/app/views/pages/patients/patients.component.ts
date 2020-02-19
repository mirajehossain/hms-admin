import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../users.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public user: UsersModel = new UsersModel();
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

}
