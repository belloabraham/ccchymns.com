import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  deleteObject,
  Storage,
  uploadBytes,
  StorageReference,
} from '@angular/fire/storage';
import { ICloudStorage } from '../cloud-storage.interface';

@Injectable()
export class CloudStorageService implements ICloudStorage {
  constructor(private storage: Storage) {}

  deleteFileFrom(pathSegment: string[]) {
    const path = pathSegment.join('/');
    const storageRef = ref(this.storage, path);
    return deleteObject(storageRef);
  }

  uploadFileTo(
    pathSegment: string[],
    file: Blob | Uint8Array | ArrayBuffer | File,
  ) {
    const path = pathSegment.join('/');
    const storageRef = ref(this.storage, path);
    return uploadBytes(storageRef, file);
  }

  getFileDownloadURL(storageRef: StorageReference) {
    return getDownloadURL(storageRef);
  }

}
