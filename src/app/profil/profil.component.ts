import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfilsService} from '../profils.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ProfilModel} from '../../models/ProfilModel';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  // motCle: any;
  pageProfiles: any;
  currentPage: any = 1;
  size: any = 5;
  pages: Array<number> | undefined;
  key: string = 'id';
  reverse: boolean = false;
  // pages: {[index: string]: any} = {};
   search = '';
   users: any = []; // c'est pour le filtre je pourrai mettre profils pour respecter la concordance

  constructor(public http: HttpClient, public profilsservice: ProfilsService, public router: Router) { }


  ngOnInit(): void {
    this.profilsservice.getProfiles(this.currentPage, this.size).pipe(map(resp => resp))
      .subscribe((data: { [x: string]: number; }) => {
       // this.pageProfiles = data;
        this.pageProfiles = data['hydra:member'];
        // @ts-ignore
        this.size = data['hydra:totalItems'];
        console.log(data);
        // @ts-ignore
        this.pages = new Array<number>(data['hydra:totalItems']);
      }, (err: any) => {
        console.log(err);
      });
    // this.http.get<any>('http://127.0.0.1:8000/api/admin/profils').pipe(map(resp => resp))
    //   .subscribe(data => {
    //     this.pageProfiles = data;
    //     this.pageProfiles = this.pageProfiles['hydra:member'];
    //     console.log(this.pageProfiles);
    //
    //   }, err => {
    //     console.log(err);
    //   });
  }

  chercher(): any {
    this.ngOnInit();
  }

  gotoPage(i: number): any{
    this.currentPage = i;
    this.ngOnInit();
  }

  onEditProfil(id: number): any{
    this.router.navigate(['/layout/edit-profil', id]);
  }

  onDeleteProfil(p: ProfilModel): any{
     const confirm = window.confirm('Voulez-vous vraiment supprimé ?');
     if (confirm === true){
   // console.log(this.pageProfiles);
     this.profilsservice.deleteProfile(p.id)
         .subscribe((data: any) => {

         this.pageProfiles.splice(
            this.pageProfiles.indexOf(p), 1
           );
         }, (err: any) => {
           console.log(err);
        });

    }
  }

  sort(key: string) {
    this.key = key;
    this.reverse = ! this.reverse;
  }
}
