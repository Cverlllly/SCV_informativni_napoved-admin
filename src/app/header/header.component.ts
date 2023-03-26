import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router, private auth:AuthService) { }

  logout(){
    this.auth.logout();
  }
  goToCalander(){
    this.router.navigate(['calander']);
  }
  goToTermini(){
    this.router.navigate(['mainpage']);
  }
}
