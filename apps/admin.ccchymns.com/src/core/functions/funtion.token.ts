import { InjectionToken } from '@angular/core';
import { ICloudFunctions } from './functions.interface';

export const CLOUD_FUNCTIONS_IJTOKEN = new InjectionToken<ICloudFunctions>(
  'cloud-funtions'
);
