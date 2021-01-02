import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfilsService} from '../profils.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  motCle: any;
  pageProfiles: any;
  currentPage: any = 1;
  size: any = 5;
  pages: Array<number> | undefined;
  // pages: {[index: string]: any} = {};

  constructor(public http: HttpClient, public profilsservice: ProfilsService) { }


  ngOnInit(): void {
    this.profilsservice.getProfiles(this.motCle, this.currentPage, this.size).pipe(map(resp => resp))
      .subscribe((data: { [x: string]: number; }) => {
        this.pageProfiles = data;
        this.pageProfiles = this.pageProfiles['hydra:member'];
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
}
