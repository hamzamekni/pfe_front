import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http:HttpClient,
    private router: Router) { }

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      username:'',
      email: '',
      plainPassword: ''
    });
  }

  submit(): void{
    console.log(this.form.getRawValue());
    this.http.post('http://127.0.0.1:8000/api/users', this.form.getRawValue())
    .subscribe( ()=> this.router.navigate(['/login']));
  }
}
