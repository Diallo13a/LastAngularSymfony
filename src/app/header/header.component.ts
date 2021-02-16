import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
