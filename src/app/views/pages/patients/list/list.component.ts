import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../../../core/services/patient.service';
import {PatientsModel} from '../patients.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public patients: PatientsModel[];
  public hasError = false;
  public errMessage: string;

  constructor(
    private patientApiService: PatientService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.patientApiService.GetPatients()
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.patients = response.data;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

}
