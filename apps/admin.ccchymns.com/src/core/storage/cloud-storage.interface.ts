import { UploadMetadata, UploadTaskSnapshot } from '@angular/fire/storage';

export interface ICloudStorage {
  /**
   * Deletes a file from the storage.
   * @param pathSegment - The path to the file to be deleted.
   */
  deleteFileFrom(pathSegment: string[]): Promise<void>;

  /**
   * Uploads a file to the storage.
   * @param pathSegment - The path where the file will be uploaded.
   * @param file - The file to upload.
   * @param onProgress - Callback function to track upload progress.
   * @param onComplete - Callback function called when upload is completed.
   * @param onError - Callback function called when an error occurs during upload.
   * @param metaData - Optional metadata for the file upload.
   */
  uploadFileTo(
    pathSegment: string[],
    file: Blob | Uint8Array | ArrayBuffer | File,
    onProgress: (
      snapshot: UploadTaskSnapshot,
      progressInPercentage: number
    ) => void,
    onComplete: (downloadUrl: string) => void,
    onError: (error: any) => void,
    metaData?: UploadMetadata
  ): void;
}
