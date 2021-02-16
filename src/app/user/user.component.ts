import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/UserModel';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public http: HttpClient, public userService: UserService, public router: Router) {
  }
  pageUser: any;
  // motCle: any;
  currentPage: any = 1;
  size: any = 5;
  pages: Array<number> | undefined;
  nom: any;
  // userSearched: any;
  users: any = [];
  search = '';
  key: string = 'id';
  reverse: boolean = false;

  ngOnInit(): void {
    this.userService.getUsers(this.currentPage, this.size).pipe(map(resp => resp))
      .subscribe((data: { [x: string]: number; }) => {
        // this.pageProfiles = data;
        this.pageUser = data['hydra:member'];
        // @ts-ignore
        this.size = data['hydra:totalItems'];
        console.log(data);
        // @ts-ignore
        this.pages = new Array<number>(data['hydra:totalItems']);
      }, (err: any) => {
        console.log(err);
      });
    // this.http.get<any>('http://127.0.0.1:8000/api/admin/users').pipe(map(resp => resp))
    //   .subscribe(data => {
    //     this.pageUser = data;
    //     this.pageUser = this.pageUser['hydra:member'];
    //     console.log(this.pageUser);
    //
    //   }, err => {
    //     console.log(err);
    //   });
  }

  chercher(): any {
    this.ngOnInit();
  }

  gotoPage(i: number): any {
    this.currentPage = i;
    this.ngOnInit();
  }

  onEditUser(id: number): any {
    this.router.navigate(['/layout/edit-user', id]);
  }

  onDeleteUser(u: UserModel): any {
    const confirm = window.confirm('Voulez-vous vraiment supprimé ?');
    if (confirm === true) {
      // console.log(this.pageProfiles);
      this.userService.deleteUser(u.id)
        .subscribe((data: any) => {
          this.pageUser.splice(
            this.pageUser.indexOf(u), 1
          );
        }, (err: any) => {
          console.log(err);
        });

    }
  }

  // Search(): any {
  //   if (this.nom === '') {
  //     this.ngOnInit();
  //     console.log(this.ngOnInit());
  //   } else {
  //     this.userService.getUsers(this.currentPage, this.size).subscribe((data: any) => {
  //       this.userSearched = data;
  //      // console.log(this.userSearched);
  //       this.users = Object.values(this.userSearched).filter((res: any) => {
  //        // return res.nom.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
  //         return res.nom.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
  //       });
  //     });
  //   }
  // }
  sort(key: string) {
    this.key = key;
    this.reverse = ! this.reverse;
  }
}
