import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RnfiService } from 'src/app/services/rnfi.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rnfiService: RnfiService
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.formBuilder.group({
    userName: ["", Validators.required],
    password: ["", Validators.required]
  });

  login(){
    let data = Object.assign({}, this.form.value);
    var formData = new FormData();
    formData.append("username", data.userName);
    formData.append("password", data.password);
    formData.append("token", "e090c25187ee2b3f9f1f8a02747356641");
    this.rnfiService.login(formData).subscribe(res => {
      if(res.twostep == 1){
        this.router.navigate(['otp-verification']);
      }
      if(res.twostep == 0){
        this.router.navigate(['dashboard']);
        localStorage.setItem("authToken", res.authToken);
      }
    });
  }

}

