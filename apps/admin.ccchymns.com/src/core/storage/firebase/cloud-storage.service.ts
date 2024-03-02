import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  deleteObject,
  Storage,
  uploadBytesResumable,
  UploadMetadata,
  UploadTaskSnapshot,
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
    onProgress: (
      snapshot: UploadTaskSnapshot,
      progressInPercentage: number
    ) => void,
    onComplete: (downloadUrl: string) => void,
    onError: (error: any) => void,
    metaData?: UploadMetadata | undefined
  ) {
    const path = pathSegment.join('/');
    const storageRef = ref(this.storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progressInPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress(snapshot, progressInPercentage);
      },
      (error) => {
        onError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((fileDownloadURL) => {
          onComplete(fileDownloadURL);
        });
      }
    );
  }
}
