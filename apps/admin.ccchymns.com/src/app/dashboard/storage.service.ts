import { Inject, Injectable } from '@angular/core';
import { CLOUD_STORAGE_IJTOKEN, ICloudStorage, UploadOptions } from '../../core';

@Injectable()
export class StorageService {
  constructor(
    @Inject(CLOUD_STORAGE_IJTOKEN) private cloudStorage: ICloudStorage
  ) {}

  deleteFile(pathSegment: string[]) {
    this.cloudStorage.deleteFileFrom(pathSegment);
  }

  uploadFile(
    pathSegment: string[],
    file: Blob | Uint8Array | ArrayBuffer | File,
     uploadOptions: UploadOptions,
  ) {
    this.cloudStorage.uploadFileTo(
      pathSegment,
      file,
      uploadOptions
    );
  }
}
