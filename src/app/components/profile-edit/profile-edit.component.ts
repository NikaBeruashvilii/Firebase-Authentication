import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseWorkerService } from '../../services/firebase-worker.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  uid!:string;
  userName!:string;
  phoneNumber!:string;
  email!:string;

  user: User = new User()


  constructor(private router:Router,
    private fireWorker:FirebaseWorkerService,
    private afs:AngularFirestore) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.afs.collection('users').doc(this.uid).set({
      'userName': this.userName,
      'phoneNumber': this.phoneNumber,
      'email': this.email,
    }, { merge: true })
      .then(() => {
        this.router.navigate(['/profile'])
      })
  }

}
