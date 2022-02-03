import { LoginService } from './../../guards/login.service';
import { Component, OnInit } from '@angular/core';
import { RnfiService } from 'src/app/services/rnfi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetail: any;

  constructor(
    private rnfiService: RnfiService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userDetail = this.rnfiService.loggedUserDetail;
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
