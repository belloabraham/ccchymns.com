import { Inject, Injectable } from '@angular/core';
import {
  CLOUD_STORAGE_IJTOKEN,
  ICloudStorage,
} from '../../core';
import { StorageReference } from '@angular/fire/storage';

@Injectable()
export class StorageService {
  constructor(
    @Inject(CLOUD_STORAGE_IJTOKEN) private cloudStorage: ICloudStorage
  ) {}

  deleteFileFrom(pathSegment: string[]) {
    return this.cloudStorage.deleteFileFrom(pathSegment);
  }

  getDownloadUrl(ref:StorageReference){
    return this.cloudStorage.getFileDownloadURL(ref)
  }

  uploadFile(
    pathSegment: string[],
    file: Blob | Uint8Array | ArrayBuffer | File
  ) {
    return this.cloudStorage.uploadFileTo(pathSegment, file);
  }
}
