import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/UserModel';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  nom: string | undefined;
  prenom: string | undefined;
  email: string | undefined;
  password: string | undefined;
  // confirmPassword: string | undefined;
  photo: string | undefined;
  username: string | undefined;
  mode: any = 1;
  idUser: number | any;
  // @ts-ignore
  user: FormGroup | any ;

  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute, public userService: UserService, public router: Router, private formBuilder: FormBuilder) {
    this.idUser = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.userService.getUser(this.idUser)
      .subscribe((data: UserModel) => {
        this.user = data;
        this.nom = this.user.nom;
      }, (err: any) => {
        console.log(err);
      });

    this.user = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      // confirmPassword: ['', [Validators.required]],
      profil_id: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  updateUser(): any{
    console.log(this.idUser);
    console.log(this.user.value);
    return ;
    const formValue = this.user.value;
    // console.log(this.user);
    // return ;
    const formData = new FormData();
    for ( const key of Object.keys(formValue)) {
      // if (key !== 'photo') {
      const value = formValue[key];
      // console.log(value);
      formData.append(key, value);
      // }
    }

    this.userService.updateUser(formData, this.idUser)
      .subscribe((data: UserModel) => {
          console.log(data);
          alert('Profil modifié');
          this.router.navigate(['/user']);
        },
        (err: any) => {
          console.log(err);
          alert('Profil non modifié');
        }
      );
  }
}
