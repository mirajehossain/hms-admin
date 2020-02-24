import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-subheader',
  templateUrl: './patient-subheader.component.html',
  styleUrls: ['./patient-subheader.component.css']
})
export class PatientSubheaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
