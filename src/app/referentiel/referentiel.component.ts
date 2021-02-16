import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReferentielService} from '../referentiel.service';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiel.component.html',
  styleUrls: ['./referentiel.component.css']
})
export class ReferentielComponent implements OnInit {
  pageReferentiels: any;
  search = '';
  key: string = 'id';
  reverse: boolean = false;
  constructor(public http: HttpClient, private referentielservice: ReferentielService) { }

  ngOnInit(): void {
    this.referentielservice.getReferentiels()
      .subscribe((data: any) => {
        console.log(data);
        this.pageReferentiels = data['hydra:member'];
        console.log(this.pageReferentiels);
      }, (err: any) => {
        console.log(err);
      });
  }

  sort(key: string) {
    this.key = key;
    this.reverse = ! this.reverse;
  }
}
