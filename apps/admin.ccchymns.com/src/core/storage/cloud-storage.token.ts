import { InjectionToken } from '@angular/core';
import { ICloudStorage } from './cloud-storage.interface';
export const CLOUD_STORAGE_IJTOKEN = new InjectionToken<ICloudStorage>(
  'cloud-storage'
);
