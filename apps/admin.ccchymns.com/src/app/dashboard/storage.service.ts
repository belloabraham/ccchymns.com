import { Inject, Injectable } from '@angular/core';
import { CLOUD_STORAGE_IJTOKEN, ICloudStorage } from '../../core';

@Injectable()
export class StorageService {
  constructor(
    @Inject(CLOUD_STORAGE_IJTOKEN) private cloudStorage: ICloudStorage
  ) {}
}
