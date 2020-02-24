import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../../users.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../../core/services/data.service';
import {DoctorService} from '../../../../core/services/doctor.service';
import {DoctorsModel, DoctorsReportModel} from '../doctors.model';

export let single = [
  {
    name: 'Day 1',
    value: 17
  },
  {
    name: 'Day 2',
    value: 11
  },
  {
    name: 'Day 3',
    value: 5
  }
];
export let single1 = [
  {
    name: 'Doctor',
    value: 8940000
  },
  {
    name: 'Patient',
    value: 5000000
  },
  {
    name: 'Serve Patient',
    value: 7200000
  },
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  single: any[];
  view: any[] = [400, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  yAxisLabel = 'Days';
  showYAxisLabel = true;
  xAxisLabel = 'Patient serve';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

// pie chart
  single1: any[];
  view1: any[] = [500, 300];

  // options
  gradient1 = true;
  showLegend1 = false;
  showLabels1 = true;
  isDoughnut1 = false;
  legendPosition1 = 'below';

  colorScheme1 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };





  public doctorId: string;
  public user: UsersModel;
  public doctorReports: DoctorsReportModel = new DoctorsReportModel();
  public doctor: DoctorsModel = new DoctorsModel();
  constructor(
    private activateRoute: ActivatedRoute,
    private dataService: DataService,
    private doctorApiService: DoctorService,
  ) {
    Object.assign(this, { single });
    Object.assign(this, { single1 });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.activateRoute.params.subscribe(params => {
      this.doctorId = params.doctorId;
    });
    if (this.user.userType === 'DOCTOR') {
      // this.getPatientReportByDoctor(this.user._id, this.patientId);
    } else if (this.user.userType === 'ADMIN') {
      this.getDoctorReportById(this.doctorId);
    }
  }

  ngOnInit() {
    this.dataService.getDoctorProfileData
      .subscribe(response => {
        this.doctor = response;
      });
  }
  getDoctorReportById(doctorId) {
    this.doctorApiService.GetDoctorReportById(doctorId)
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.doctorReports = response.data;
        }
      }, error => { console.log(error); });
  }

}
