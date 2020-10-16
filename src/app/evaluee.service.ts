import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvalueeService {
  evalueePortal: any;
  evalueePortalSubscription: Subscription;

  constructor(private db: AngularFirestore) { }

  loadEvalueePortal(evalueeId: string) {
    if (!this.evalueePortalSubscription) {
      this.evalueePortalSubscription = this.db.collection('portals').doc('R04470_DNMM').collection('evaluees').doc(evalueeId).valueChanges().pipe(
        tap(res => {
          if (res) {
            this.evalueePortal = res;
            console.log('evalPort: ', this.evalueePortal);
          } else {
            console.log('error');
          }
        })
      ).subscribe();
    }
  }
}
