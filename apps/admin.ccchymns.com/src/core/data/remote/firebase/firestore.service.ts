import { Injectable } from '@angular/core';
import {
  FieldPath,
  Firestore,
  FirestoreError,
  QueryConstraint,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  writeBatch,
} from '@angular/fire/firestore';
import { FirestoreErrorCodes } from './error-codes';
import { LoggerUtil } from '@ccchymns.com/core';
import { documentDataSnapshotToType, querySnapshotToArrayOfType } from './utils';
import { IDatabase } from '../database.interface';


@Injectable()
export class FirestoreService implements IDatabase {
  constructor(private firestore: Firestore) {}

  getALiveDocumentData<T>(
    path: string,
    pathSegment: string[],
    onNext: (type: T) => void,
    retryTimeout: number = 2000
  ) {
    const ref = doc(this.firestore, path, ...pathSegment);
    const unsubscribe = onSnapshot(ref, {
      next: (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          const json = JSON.stringify(data);
          const type: T = JSON.parse(json);
          onNext(type);
        }
      },
      error: (error: FirestoreError) => {
        LoggerUtil.error('FirestoreService', 'getLiveData', error);
        const code = error.code.toString();
        if (
          code !== FirestoreErrorCodes.permDenied &&
          code !== FirestoreErrorCodes.unauth
        ) {
          setTimeout(() => {
            this.getALiveDocumentData(path, pathSegment, onNext);
          }, retryTimeout);
        }
      },
    });
    return unsubscribe;
  }

  getLiveListOfDocumentData<T>(
    path: string,
    pathSegment: string[],
    onNext: (type: T[]) => void,
    onError: (errorCode: string) => void
  ) {
    const q = query(collection(this.firestore, path, ...pathSegment));

    const unsubscribe = onSnapshot(q, {
      next: (querySnapShot) => {
        const dataArray: T[] = [];
        querySnapShot.forEach((queryDoc) => {
          if (queryDoc.exists()) {
            const data = queryDoc.data();
            const json = JSON.stringify(data);
            const type: T = JSON.parse(json);
            dataArray.push(type);
          }
        });
        onNext(dataArray);
      },
      error: (error: FirestoreError) => {
        const errorCode = error.code.toString();
        onError(errorCode);
      },
    });
    return unsubscribe;
  }

  getLiveListOfDocumentDataWithQuery<T>(
    path: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[],
    onNext: (type: T[], arrayOfDocIds: string[]) => void,
    onError: (errorCode: string) => void
  ) {
    const q = query(
      collection(this.firestore, path, ...pathSegment),
      ...queryConstraint
    );

    const unsubscribe = onSnapshot(q, {
      next: (querySnapShot) => {
        const dataArray: T[] = [];
        const arrayOfIds: string[] = [];
        querySnapShot.forEach((queryDoc) => {
          if (queryDoc.exists()) {
            const data = queryDoc.data();
            const json = JSON.stringify(data);
            const type: T = JSON.parse(json);
            dataArray.push(type);
            arrayOfIds.push(queryDoc.id);
          }
        });
        onNext(dataArray, arrayOfIds);
      },
      error: (error: FirestoreError) => {
        const errorCode = error.code.toString();
        onError(errorCode);
      },
    });
    return unsubscribe;
  }

  async getListOfDocumentDataWithQueryAsync<T>(
    databaseCollection: string,
    pathSegment: string[],
    queryConstraint: QueryConstraint[]
  ): Promise<T[]> {
    const q = query(
      collection(this.firestore, databaseCollection, ...pathSegment),
      ...queryConstraint
    );
    const querySnapshot = await getDocs(q);
    return querySnapshotToArrayOfType<T>(querySnapshot);
  }

  async getListDocumentDataWithQueryFromCollectionGroupAsync<T>(
    childCollection: string,
    queryConstraint: QueryConstraint[]
  ): Promise<T[]> {
    const q = query(
      collectionGroup(this.firestore, childCollection),
      ...queryConstraint
    );
    const querySnapshot = await getDocs(q);
    return querySnapshotToArrayOfType(querySnapshot);
  }

  async getAListOfDocData<T>(
    path: string,
    pathSegment: string[]
  ): Promise<T[]> {
    const q = query(collection(this.firestore, path, ...pathSegment));
    const querySnapshot = await getDocs(q);
    return querySnapshotToArrayOfType(querySnapshot);
  }

  async getADocumentDataAsync<T>(
    collection: string,
    pathSegment: string[]
  ): Promise<T | null> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    const docSnapShot = await getDoc(docRef);
    return documentDataSnapshotToType<T>(docSnapShot);
  }

  addADocumentDataTo(
    collection: string,
    pathSegment: string[],
    type: any,
    merge = { merge: true }
  ): Promise<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return setDoc(docRef, type, merge);
  }

  deleteAllDocumentDataFrom(
    collection: string,
    pathSegment: string[],
    docIds: string[]
  ) {
    const batch = writeBatch(this.firestore);
    for (let index = 0; index < docIds.length; index++) {
      const pathSegmentWithId = pathSegment.concat([docIds[index]]);
      const docRef = doc(this.firestore, collection, ...pathSegmentWithId);
      batch.delete(docRef);
    }
    return batch.commit();
  }

  deleteADocumentFrom(
    collection: string,
    pathSegment: string[]
  ): Promise<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return deleteDoc(docRef);
  }

  updateADocumentDataIn(
    collection: string,
    pathSegment: string[],
    map: Record<string, any>
  ): Promise<void> {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return updateDoc(docRef, map);
  }

  updateADocumentFieldIn(
    collection: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown
  ) {
    const docRef = doc(this.firestore, collection, ...pathSegment);
    return updateDoc(docRef, field, fieldValue);
  }

  updateAllDocumentDataIn<T>(
    path: string,
    pathSegment: string[],
    field: string | FieldPath,
    fieldValue: unknown,
    docIds: string[]
  ) {
    const batch = writeBatch(this.firestore);
    for (let index = 0; index < docIds.length; index++) {
      const pathSegmentWithId = pathSegment.concat([docIds[index]]);
      const docRef = doc(this.firestore, path, ...pathSegmentWithId);
      batch.update(docRef, field, fieldValue);
    }
    return batch.commit();
  }
}
