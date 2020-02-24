import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {PatientsModel} from '../../views/pages/patients/patients.model';
import {DoctorsModel} from '../../views/pages/doctors/doctors.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private patientProfile = new BehaviorSubject(new PatientsModel());
  getPatientProfileData = this.patientProfile.asObservable();

  private doctorProfile = new BehaviorSubject(new DoctorsModel());
  getDoctorProfileData = this.doctorProfile.asObservable();

  constructor() { }

  updatePatientProfileData(patient: PatientsModel) {
    this.patientProfile.next(patient);
  }
  updateDoctorProfileData(patient: PatientsModel) {
    this.doctorProfile.next(patient);
  }

}
