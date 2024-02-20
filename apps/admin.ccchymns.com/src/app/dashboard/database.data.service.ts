import { Inject, Injectable } from '@angular/core';
import { DATABASE_IJTOKEN, IDatabase } from '../../core';

@Injectable()
export class DatabaseDataService {
  constructor(@Inject(DATABASE_IJTOKEN) private database: IDatabase) {}
}
