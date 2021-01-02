import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../profils.service';
import {ProfilModel} from '../../../models/ProfilModel';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  mode: any = 1;
  profil: ProfilModel = new ProfilModel();

  constructor(public profilsservice: ProfilsService) { }

  ngOnInit(): void {
  }

  saveProfile(): any{
    // this.profilsservice.saveProfile(this.profil)
    //   .subscribe((data: any) => {
    //     console.log(data);
    //   }, (err: any) => {
    //     console.log(err);
    //   });
    this.profilsservice.saveProfile(this.profil)
      .subscribe((data: any) => {
        this.profil = data;
        this.mode = 2;
      }, (err: any) => {
        console.log(err);
      });
  }
}
