import { Injectable } from '@angular/core';
import { Providers } from '@ccchymns.com/angular';
import {
  IAllHymns,
  IHymnNo,
} from '@ccchymns.com/common';

@Injectable({
  providedIn: Providers.ROOT,
})
export class AllHymnsDataService {
  allHymns: IAllHymns = {};

  addDataToAllHymns(allHymns: IHymnNo[], type: string) {
    allHymns.forEach((hymn) => this.addHymnAllHymns(hymn, type));
  }

  addHymnAllHymns(data: IHymnNo, type: string) {
    const hymnNo = data.no;
    if (!this.allHymns[hymnNo]) {
      this.allHymns[hymnNo] = {};
    }
    this.allHymns[hymnNo][type] = data;
  }
}
