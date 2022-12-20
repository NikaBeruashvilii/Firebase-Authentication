import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {                                             //Log out from account and navigate on register component
    localStorage.setItem('authorized', 'false');
    this.router.navigate(['/register']);
    // this.checkUsersData.storageInfo();
  }


}
