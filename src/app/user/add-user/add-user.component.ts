import { Component, OnInit } from '@angular/core';
import {ProfilModel} from '../../../models/ProfilModel';
import {UserModel} from '../../../models/UserModel';
import {UserService} from '../../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  mode: any = 1;
  user: FormGroup | any ;

  nom: string | undefined;
  prenom: string | undefined;
  email: string | undefined;
  password: string | undefined;
  // confirmPassword: string | undefined;
  photo: string | undefined;
  username: string | undefined;
  type: string | undefined;
  constructor(public userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      // confirmPassword: ['', [Validators.required]],
      profil_id: ['', [Validators.required]],
      username: ['diouf', [Validators.required, Validators.minLength(4)]],
      type: ['apprenant', [Validators.required, Validators.minLength(4)]],
    });
  }


  // Uploadefiler(event: any): any {
  //   // tslint:disable-next-line:triple-equals
  //   if (!event.target.files[0] || event.target.files[0].length == 0) {
  //     this.msg = 'You must select an image';
  //     console.log('You must select an image');
  //     return;
  //   }
  //   this.selectedFile = event.target.files[0] ;
  //
  //   const mimeType = event.target.files[0].type;
  //
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.msg = 'Only images are supported';
  //     return;
  //   }
  //
  //   const reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //
  //   // tslint:disable-next-line:variable-name
  //   reader.onload = (_event) => {
  //     this.msg = '';
  //     this.url = reader.result;
  //   };
  // }

  saveUser(): any {
    // this.type = 'apprenant';
    // this.username = 'apprenant';
    console.log(this.user.value);
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
    // @ts-ignore
    this.userService.saveUser(formData)
      .subscribe((data: any) => {
        this.user = data;
        this.mode = 2;
      }, (err: any) => {
        console.log(err);
      });
    // console.log(this.user);
  }


  // console.log(formValue);return;

  // console.log(formValue);
  // formData.append('firtname', this.formUser.value.firtname);
  // formData.append('lastname', this.formUser.value.lastname);
  // formData.append('email', this.formUser.value.email);
  // formData.append('password', this.formUser.value.password);
  // formData.append('username', this.formUser.value.username);
  // formData.append('profils', this.formUser.value.profils);


// console.log(formData) ;

// if (this.selectedFile) {
//   formData.append('photo', this.selectedFile);
// }
// this.userService.postUseronBack(formData).subscribe( data => {
//   Swal.fire(
//     'Good!',
//     'user added with success!',
//     'success'
//   )
//   this.router.navigate(['listUsers']);
//
// }, error => {
//   this.errorSubmitted = true;
// }) ;

}
