import { UploadMetadata, UploadTaskSnapshot } from '@angular/fire/storage';

export interface ICloudStorage {
  /**
   * Uploads a file to Cloud Storage.
   * @param path The path where the file will be stored in Cloud Storage.
   * @param file The file to be uploaded (Blob, File Uint8Array, or ArrayBuffer).
   * @param options (Optional) An object containing additional upload options like progress callbacks, completion handler, error handler, and metadata.
   */
  uploadFileTo(
    path: string,
    file: Blob | File | Uint8Array | ArrayBuffer,
    uploadOptions: UploadOptions
  ): void;
}
export interface UploadOptions {
  /**
   * (Optional) A callback function to be called periodically during the upload process.
   * This function receives the `UploadTaskSnapshot` object and the calculated progress in percentage.
   * @param snapshot The `UploadTaskSnapshot` object containing upload progress information.
   * @param progressInPercentage The upload progress as a number between 0 and 100.
   */
  onProgress: (
    snapshot: UploadTaskSnapshot,
    progressInPercentage: number
  ) => void;

  /**
   * (Optional) A callback function to be called when the upload is complete and the download URL is available.
   * This function receives the download URL as a string.
   * @param fileDownloadURL The URL to download the uploaded file.
   */
  onComplete: (fileDownloadURL: string) => void;

  /**
   * (Optional) A callback function to be called if an error occurs during the upload process.
   * This function receives the error object.
   * @param error The error object containing details about the upload failure.
   */
  onError: (error: any) => void;

  /**
   * (Optional) Additional metadata to associate with the uploaded file.
   * This metadata object can be used to store additional information about the file in Cloud Storage.
   */
  metaData?: UploadMetadata;
}
