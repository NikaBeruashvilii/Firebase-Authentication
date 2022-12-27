import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckbooleansService } from '../../services/checkbooleans.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public checkUser:CheckbooleansService) { }

  ngOnInit(): void {
  }

  logOut() {                                             //Log out from account and navigate on register component
    this.router.navigate(['/login']);
    this.checkUser.checkUserLoggedIn = false;
  }

  goToProfile() {
    this.router.navigate(['/profile'])
  }


}
