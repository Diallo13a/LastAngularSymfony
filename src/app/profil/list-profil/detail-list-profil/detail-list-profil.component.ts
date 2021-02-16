import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfilsService} from '../../../profils.service';

class Profilsservice {
}

@Component({
  selector: 'app-detail-list-profil',
  templateUrl: './detail-list-profil.component.html',
  styleUrls: ['./detail-list-profil.component.css']
})
export class DetailListProfilComponent implements OnInit {
  detailprofil: any;
  constructor(private profilsservice: ProfilsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    this.profilsservice.detailprofil(id)
      .subscribe((data: any) => {
        this.detailprofil = data;
        console.log(data);
        // console.log(data);
      });
  }

}
