import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  deleteObject,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { ICloudStorage, UploadOptions } from '../cloud-storage.interface';

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
    uploadOptions: UploadOptions
  ) {
    const path = pathSegment.join('/');
    const storageRef = ref(this.storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progressInPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (uploadOptions.onProgress) {
          uploadOptions.onProgress(snapshot, progressInPercentage);
        }
      },
      (error) => {
        if (uploadOptions.onError) {
          uploadOptions.onError(error);
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((fileDownloadURL) => {
          if (uploadOptions.onComplete) {
            uploadOptions.onComplete(fileDownloadURL);
          }
        });
      }
    );
  }
}
