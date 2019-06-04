import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../../../services/auth/login-signup.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

	public form = {
		email: null
	}

  constructor(
  	private LoginSignup: LoginSignupService,
  	private notify: SnotifyService
  	) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.LoginSignup.sendPasswordResetLink(this.form).subscribe(
  		data => this.handleResponse(data),
  		error => this.notify.error(error.error.error)
  	);
  }

  handleResponse(res){

  	this.form.email = null;
  }

}
