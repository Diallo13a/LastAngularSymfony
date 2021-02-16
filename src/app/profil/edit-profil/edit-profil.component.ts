import { Component, OnInit } from '@angular/core';
import {ProfilModel} from '../../../models/ProfilModel';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfilsService} from '../../profils.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
  mode: any = 1;
  idProfil: number | any;
  profil: ProfilModel = new ProfilModel();
  constructor(public activatedRoute: ActivatedRoute, public profilservice: ProfilsService, public router: Router) {
    this.idProfil = activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.profilservice.getProfile(this.idProfil)
      .subscribe((data: ProfilModel) => {
        this.profil = data;
      }, (err: any) => {
        console.log(err);
      });
  }

  updateProfile(): any {
    console.log(this.idProfil);
    this.profilservice.updateProfile(this.profil)
      .subscribe((data: ProfilModel) => {
       console.log(data);
       alert('Profil modifié');
       this.router.navigate(['/layout/profil']);
    },
         (err: any) => {
       console.log(err);
       alert('Profil non modifié');
     }
    );
  }
}
