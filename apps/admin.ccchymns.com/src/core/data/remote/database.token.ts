import { Providers } from '@ccchymns.com/angular';
import { FirestoreService } from './firebase/firestore.service';
import { InjectionToken, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { IDatabase } from './database.interface';

export const DATABASE_IJTOKEN = new InjectionToken<IDatabase>('database', {
  providedIn: Providers.ROOT,
  factory: () => new FirestoreService(inject(Firestore)),
});
