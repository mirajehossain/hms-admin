import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-subheader',
  templateUrl: './doctor-subheader.component.html',
  styleUrls: ['./doctor-subheader.component.css']
})
export class DoctorSubheaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
