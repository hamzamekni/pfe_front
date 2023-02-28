
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 


  form : FormGroup;
  constructor(private formBuilder: FormBuilder,
    private http:HttpClient,
    private router: Router,
    private toast: NgToastService) { }

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(res =>{ 
    this.toast.success({detail:"Success Message",summary:"Login is Success",duration:5000})
    this.router.navigate(['/list-produit'])},
    err=>{
      this.toast.error({detail:"Error Message",summary:"Login Failed",duration:5000})
    });
  }
  
 


  

 

 }
