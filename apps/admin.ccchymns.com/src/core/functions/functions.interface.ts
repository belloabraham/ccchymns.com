import { HttpsCallableResult } from "@angular/fire/functions";

export interface ICloudFunctions {
  call: (name: string, data?: any) => Promise<HttpsCallableResult<unknown>>;
}
