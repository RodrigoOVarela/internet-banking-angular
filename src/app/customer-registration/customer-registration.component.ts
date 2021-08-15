import { Component, OnInit, ValueProvider } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  public formRegister: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formRegister = this.formBuilder.group({
      name: [''],
      cpf: [''],
      email: [''],
      phone: [''],
      address: ['']
    })
  }

  public register() {
    console.log(this.formRegister.controls);
  }

}
