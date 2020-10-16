import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Evaluee } from './evaluee.model';
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvalueeService {
  evaluee: Evaluee;

  constructor(private db: AngularFirestore) { }

  loadEvaluee(portalId: string, evalueeId: string): Promise<Evaluee> {
    const docRef = this.db.collection('portals').doc(portalId).collection('evaluees').doc<Evaluee>(evalueeId);
    return docRef.valueChanges().pipe(
      first(),
      tap (res => {
        if (res) {
          this.evaluee = res;
        }
      })
    ).toPromise();
  }
}
