import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.userService.getUser(Number(id))
      .subscribe((data: any) => {
        this.user = data;
        console.log(this.user);
      });
  }

}


