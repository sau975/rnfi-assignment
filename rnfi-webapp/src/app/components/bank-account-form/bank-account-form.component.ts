import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RnfiService } from 'src/app/services/rnfi.service';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css']
})
export class BankAccountFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rnfiService: RnfiService
  ) { }

  ngOnInit() {
    var formData = new FormData();
    formData.append("token", "e090c25187ee2b3f9f1f8a02747356641");
    formData.append("authToken", "e090c25187ee2j890890skjb3f9f1f8a027r7kjd99");
    this.rnfiService.getDynamicData(formData).subscribe(res => {
      console.log(res.data[0]);
      this.form = this.setUpForm(res.data[0].rnfi);
      this.form.patchValue(res.data[0].rnfi);
    })
  }

  setUpForm(data: any[] ) {
    return new FormGroup({
      data: new FormArray(data.map((company) => this.create(company)))
    });
  }

  get formArray() {
    return (this.form.get('data') as FormArray);
  }

  // addBin() {
  //   let newBin = {};
  //   this.bins.push(newBin);
  //   this.binsFormArray.push(this.createBin(newBin));
  // }

  // save() {
  //   console.log(this.binsForm.value);
  // }

  create(company: any) {
    return new FormGroup({
      accountholder: new FormControl(company.accountholder || ''),
      accountnumber: new FormControl(company.accountnumber || ''),
      bankname: new FormControl(company.bankname || ''),
      ifsccode: new FormControl(company.ifsccode || ''),
      balance: new FormControl(company.balance || ''),
      Address: new FormControl(company.Address || '')
    })
  }
}


