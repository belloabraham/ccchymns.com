import { Inject, Injectable } from '@angular/core';
import {
  IAllHymns,
  IAllHymnsUIState,
  IEditorsHymn,
  IHymnNo,
} from '@ccchymns.com/common';
import { ReplaySubject } from 'rxjs';
import {
  CLOUD_FUNCTIONS_IJTOKEN,
  Collection,
  DATABASE_IJTOKEN,
  ICloudFunctions,
  IDatabase,
} from 'apps/admin.ccchymns.com/src/core';

@Injectable()
export class AllHymnsDataService {
  allHymns = new Map<number, IAllHymns>();
  private allHymnsUIState$ = new ReplaySubject<IAllHymnsUIState[]>(1);

  constructor(
    @Inject(DATABASE_IJTOKEN) private remoteData: IDatabase,
    @Inject(CLOUD_FUNCTIONS_IJTOKEN) private cloudFunctions: ICloudFunctions
  ) {}

  addDataToAllHymns(allHymns: IHymnNo[], type: string) {
    allHymns.forEach((hymn) => this.addToAllHymns(hymn, type));
    this.updateAllHymnsUIState();
  }

  updateHymnLyricsPaidStatus(value: IEditorsHymn) {
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.no}`],
      value
    );
  }

  getAllUnpublishedHymnIds(): IHymnNo[] {
    const allHymns = Array.from(this.allHymns.values());
    const allUnpublishedHymnIds: IHymnNo[] = [];
    for (let index = 0; index < allHymns.length; index++) {
      const element = allHymns[index];
      if (element.lyric && !element.lyric.published) {
        allUnpublishedHymnIds.push({
          no: element.lyric.no,
        });
      }
    }
    return allUnpublishedHymnIds;
  }

  setAllHymns(allHymns: Map<number, IAllHymns>) {
    this.allHymns = allHymns;
    this.updateAllHymnsUIState();
  }

  private updateAllHymnsUIState() {
    const allHymnsUIState = Array.from(this.allHymns.values()).filter(
      (value) => value.lyric !== undefined
    );
    allHymnsUIState.sort((first, next) => first.lyric!.no - next.lyric!.no);
    this.allHymnsUIState$.next(allHymnsUIState);
  }

  getAllHymnsUIState$() {
    return this.allHymnsUIState$;
  }

  private addToAllHymns(data: IHymnNo, type: string) {
    const hymnNo = data.no;
    if (!this.allHymns.get(hymnNo)) {
      this.allHymns.set(hymnNo, {});
    }
    this.allHymns.get(hymnNo)![type] = data;
  }
}
