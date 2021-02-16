import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-list-user',
  templateUrl: './detail-list-user.component.html',
  styleUrls: ['./detail-list-user.component.css']
})
export class DetailListUserComponent implements OnInit {
userdetail: any;
  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    this.userService.getUser(id)
      .subscribe((data: any) => {
        this.userdetail = data;
       // console.log(data);
      });
  }

}
