import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Evaluee } from './data.model';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class EvalueeService {
  evaluee: Evaluee;
  evalueeSubscription: Subscription;

  register: Register;
  registerSubscription: Subscription;

  constructor(private db: AngularFirestore) { }

  loadEvaluee(evalueeId: string) {
    if (!this.evalueeSubscription) {
      this.evalueeSubscription = this.db.collection('evaluees').doc<Evaluee>(evalueeId).valueChanges().pipe(
        tap(res => {
          if (res) {
            this.evaluee = res;
            console.log('eval: ', this.evaluee);
          } else {
            console.log('error');
          }
        })
      ).subscribe();
    }
  }

  loadRegister(registerId: string) {
    if (!this.registerSubscription) {
      this.registerSubscription = this.db.collection('registrations').doc<Register>(registerId).valueChanges().pipe(
        tap(res => {
          if (res) {
            this.register = res;
            console.log('register: ', this.register);
          } else {
            console.log('error');
          }
        })
      ).subscribe();
    }
  }
}
