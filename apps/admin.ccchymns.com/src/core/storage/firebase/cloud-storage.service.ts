import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { ICloudStorage, UploadOptions } from '../cloud-storage.interface';

@Injectable()
export class CloudStorageService implements ICloudStorage {
  constructor(private storage: Storage) {}

  uploadFileTo(
    path: string,
    file: Blob | Uint8Array | ArrayBuffer | File,
    uploadOptions: UploadOptions
  ) {
    const storageRef = ref(this.storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progressInPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploadOptions.onProgress(snapshot, progressInPercentage);
      },
      (error) => {
        uploadOptions.onError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((fileDownloadURL) => {
          uploadOptions.onComplete(fileDownloadURL);
        });
      }
    );
  }
}
