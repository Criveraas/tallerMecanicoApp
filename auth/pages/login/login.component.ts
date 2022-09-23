import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      button {
        display: inline-block;
        position: relative;
        position: absolute;
        top: 4em;
        right: 4em;        
        border-radius: 1.5em;        
        text-transform: uppercase;
        padding: 1em 1.5em;
      }
    `,
  ],
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}

  login() {
    this.auth.login().subscribe((resp) => {
      if (resp.id) {
        this.router.navigate(['./clientes']);
      }
    });
  }
}
