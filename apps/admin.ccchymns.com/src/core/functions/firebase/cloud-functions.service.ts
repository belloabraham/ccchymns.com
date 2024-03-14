import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable()
export class CloudFunctionsService {
  constructor(private functions: Functions) {}

  call(name: string, data?: any) {
    let callable = httpsCallable(this.functions, name);
    return callable(data);
  }
}
