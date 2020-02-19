import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PatientsModel} from '../../views/pages/patients/patients.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private patientProfile = new BehaviorSubject(new PatientsModel());
  getPatientProfileData = this.patientProfile.asObservable();

  constructor() { }

  updatePatientProfileData(patient: PatientsModel) {
    this.patientProfile.next(patient);
  }

}
