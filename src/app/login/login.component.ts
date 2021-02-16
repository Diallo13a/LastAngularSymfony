import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required ),
    password: new FormControl('')
  });
  fakeData = false;
  errorMessage = 'Login ou mot de passe incorrect !';
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['Louis Rodriguez', [Validators.required]],
      password: ['pass_1234', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(): any{
    return this.loginForm.controls;
  }
  get username(): any{
    return this.loginForm.get('username');
  }
  onSubmit(): any {
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    // Treatment for generate token
    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
        (data: any) => {
          console.log(data);
          // if (this.decode.archive === false) {
          localStorage.setItem('token', JSON.stringify(data));
          this.decode = jwt_decode(data.token);
          console.log(this.decode.roles[0]);
          localStorage.setItem('id', this.decode.id);
          // console.log(this.decode.id);
          // console.log();
          if (this.decode.roles[0] === 'ROLE_ADMIN') {
            this.router.navigate(['/layout/admin']);
          } else {
            this.router.navigate(['/login']);
          }
        // }else {
        //     console.log('Connexion impossible');
        //   }
      },
      (error: any) => {
        this.fakeData = true;
        return this.errorMessage;
      }
    );
  }
  }

