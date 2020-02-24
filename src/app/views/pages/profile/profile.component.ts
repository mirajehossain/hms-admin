import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../users.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../core/services/data.service';
import {DoctorService} from '../../../core/services/doctor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  public isEdit = false;
  public patientId: string;
  public user: UsersModel = new UsersModel();
  constructor(
    private activateRoute: ActivatedRoute,
    private dataService: DataService,
    private doctorApiService: DoctorService,
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getUserProfile(this.user._id);
  }

  ngOnInit() {
  }

  getUserProfile(userId) {
    this.doctorApiService.GetUserProfile(userId)
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.user = response.data;
        }
      }, error => { console.log(error); });
  }

  uploadIcon(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.user.image = event.target.result;
      };
      const file = event.target.files[0];
      console.log(file);
      this.doctorApiService.UploadImage(this.user._id, file)
        .subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    }
  }

  updateProfile() {
    this.doctorApiService.UpdateProfile(this.user)
      .subscribe(response => {
        console.log(response);
        if (response.success) {
          this.user = response.data;
          this.isEdit = false;
        }
      }, error => {
        this.isEdit = false;
        console.log(error);
      });
  }
}
