import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = "";
  error = false;
  model: any = {
    email: '',
    password: ''
  }
  
  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit(): void {
  }

  signInUser() {
    let user = {
      email: this.model.email,
      password: this.model.password
    }
    this.apiService.sigIn(user).subscribe((data: any) => {
      localStorage.setItem('token', data.headers.get('x-access-token'));

      this.router.navigate(['/homepage']);
    },
      (error) => {
        this.error = true;
        this.errorMessage = error.error.message;
      });
  }
}
