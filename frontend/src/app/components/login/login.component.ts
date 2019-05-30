import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../../services/auth/login-signup.service';
import { TokenService } from '../../services/auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form = {
    email : null,
    password : null
  };

  public error = null;

  constructor(
    private LoginSignup: LoginSignupService,
    private Token: TokenService
    ) { }

  ngOnInit() {
  }

  onSubmit() {

    return this.LoginSignup.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  //Get the error message from error array
  handleError(error){
    return this.error = error.error.error;
  }

  // call the service and pass the access_token generated from successfully logged in
  handleResponse(data){
    console.log(data.access_token);
    this.Token.handle(data.access_token);
  }

}
