import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth_service/auth.service';

import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  title = 'Spring Boot WebSocket Chat App';
  private stompClient;

  constructor(private auth: AuthService) {
    this.connect();
  }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.auth.redirectToLogin();
    }
  }

  connect() {
    const ws = new SockJS('http://localhost:8080/socket');
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function () {
      that.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          $('.chat').prepend('<div class=\'alert alert-secondary flex-wrap\'>' + message.body + '</div>');
        }
      });
    });
  }

  sendMessage(message) {
    if (message) {
      this.stompClient.send('/app/send/message', {}, message);
    }
    $('#input').val('');
  }

}
