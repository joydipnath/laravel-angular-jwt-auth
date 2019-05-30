import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../../services/auth/login-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private LoginSignup: LoginSignupService) { }

  public form = {
  	email:null,
  	name: null,
  	password: null,
  	password_confirmation:null
  };

  public error = [];

  ngOnInit() {
  }

  onSubmit() {

    return this.LoginSignup.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    return this.error = error.error.errors;
  }

}
