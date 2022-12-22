import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseWorkerService } from '../../services/firebase-worker.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginInfo: User = new User();
  
  checkInpType: boolean = true;
  inpType:string = 'password';
  eyeIcon:string = 'ri-eye-off-fill';


  constructor(private router: Router,
    private fireWorker:FirebaseWorkerService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm) {
    this.fireWorker.signIn(form.value.email,form.value.password).then((response:any) => {
      response.subscribe((user:any) => {console.log(user)})   
  })
  this.router.navigate(['/register'])
  }

  eyeIconToggle() {
    this.checkInpType = !this.checkInpType;
    if (this.checkInpType) {
      this.eyeIcon = 'ri-eye-off-fill';
      this.inpType = 'password';
    } else {
      this.eyeIcon = 'ri-eye-fill';
      this.inpType = 'text';
    }
  }


}
