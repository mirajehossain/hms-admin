import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../../core/services/doctor.service';
import {Router} from '@angular/router';
import {DoctorsModel} from '../doctors.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  public doctors: DoctorsModel[];
  public hasError = false;
  public errMessage: string;

  constructor(
    private doctorApiService: DoctorService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorApiService.GetDoctors()
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.doctors = response.data;
        }
      }, error => {
        this.hasError = true;
        this.errMessage = error;
      });
  }

}
