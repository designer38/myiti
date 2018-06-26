import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {  HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  userLogin: object;
  constructor(
        private Data: DataService,
				private http:HttpClient,
				private router: Router
  ) { 

    this.userLogin = {
      "email": "",
      "password": ""
    }
  }


  getworkspace(httpOption: NgForm): void{
		console.log(httpOption.value)
		let DeviceToken ="null";
		let path:string='https://tal-company.herokuapp.com/users/login/web'
		this.Data.postDataHeader(path,httpOption.value,
			{headers : new HttpHeaders({'Device-Token':`Bearer ${DeviceToken}`})}
		).subscribe(
		res=>{
			// this.getData =res;
			// let token = res.RequestMessage.Headers.GetValues('Token').FirstOrDefault()
			console.log(res);
			localStorage.setItem('token',res.userTok);
			localStorage.setItem('userId',res.userId);
			localStorage.setItem('userType',res.userType);
			this.router.navigate(['/myCoursesList'])
		},
		err=>{
			console.log(err);
		},
		);
}
  ngOnInit() {
  }

}
