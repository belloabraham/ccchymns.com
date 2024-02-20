import { DocumentData, DocumentSnapshot, QuerySnapshot } from "@angular/fire/firestore";

 export function documentDataSnapshotToType<T>(docSnapShot: DocumentSnapshot<DocumentData>) {
    if (docSnapShot.exists()) {
      const data = docSnapShot.data();
      const json = JSON.stringify(data);
      const type: T = JSON.parse(json);
      return type;
    } else {
      return null;
    }
  }

  export function querySnapshotToArrayOfType<T>(
    querySnapshot: QuerySnapshot<DocumentData>
  ): T[] {
    const dataArray: T[] = [];
    querySnapshot.forEach((queryDoc) => {
      if (queryDoc.exists()) {
        const data = queryDoc.data();
        const json = JSON.stringify(data);
        const type: T = JSON.parse(json);
        dataArray.push(type);
      }
    });
    return dataArray;
  }
