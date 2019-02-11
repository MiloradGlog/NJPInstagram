import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth_service/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectToLogin();
    }
  }

}
