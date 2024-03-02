import { Inject, Injectable } from '@angular/core';
import { CLOUD_STORAGE_IJTOKEN, ICloudStorage } from '../../core';
import { UploadMetadata, UploadTaskSnapshot } from '@angular/fire/storage';

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
    onComplete: (downloadUrl: string) => void,
    onError: (error: any) => void,
    onProgress?: (
      snapshot: UploadTaskSnapshot,
      progressInPercentage: number
    ) => void,
    metaData?: UploadMetadata
  ) {
    this.cloudStorage.uploadFileTo(
      pathSegment,
      file,
      onComplete,
      onError,
      onProgress,
      metaData
    );
  }
}
