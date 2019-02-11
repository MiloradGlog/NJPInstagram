import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data_service/data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth_service/auth.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
          [
            style({opacity: 0, transform: 'translateY(-15px)'}),
            stagger('50ms',
              animate('550ms ease-out',
                style({opacity: 1, transform: 'translateY(0px)'})))
          ], {optional: true}),
        query(':leave', animate('50ms', style({opacity: 0})),{
          optional: true
        })
      ])
    ])
  ]
})
export class FollowingComponent implements OnInit {

  users$: Object;
  constructor(private data: DataService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectToLogin();
    }
    this.data.getFollowing(localStorage.getItem('user')).subscribe(
      data => this.users$ = data
    );
  }

}
