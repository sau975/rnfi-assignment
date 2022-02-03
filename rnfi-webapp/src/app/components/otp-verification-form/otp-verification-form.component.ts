import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RnfiService } from 'src/app/services/rnfi.service';

@Component({
  selector: 'app-otp-verification-form',
  templateUrl: './otp-verification-form.component.html',
  styleUrls: ['./otp-verification-form.component.css']
})
export class OtpVerificationFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rnfiService: RnfiService
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.formBuilder.group({
    otp: [null, Validators.required]
  });

  otpVerify(){
    let data = Object.assign({}, this.form.value);
    var formData = new FormData();
    formData.append("token", "e090c25187ee2b3f9f1f8a02747356641");
    formData.append("authToken", "e090c25187ee2j890890skjb3f9f1f8a027r7kjd99");
    formData.append("otp", data.otp);
    this.rnfiService.otpVerification(formData).subscribe(res => {
      this.rnfiService.loggedUserDetail = res;
      localStorage.setItem("authToken", res.authToken);
      this.router.navigate(['dashboard']);
    });
  }
}
