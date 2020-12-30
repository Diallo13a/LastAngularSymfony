import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string | any;
  formLogin: FormGroup | any;
  submitted: boolean | any;
  decode: any;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['Louis Rodriguez', [Validators.required]],
      password: ['pass_1234', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(): any{
    return this.formLogin.controls;
  }
  onSubmit(): any {
    this.submitted = true;
    if (this.formLogin.invalid){
      return;
    }
    // Treatment for generate token
    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
        (data: any) => {
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data));
        this.decode = jwt_decode (data.token) ;
        console.log(this.decode.roles[0]);
        // console.log();
        if (this.decode.roles[0] === 'ROLE_ADMIN'){
            this.router.navigate(['/layout/admin']);
          }
      }
    );
  }
  }

