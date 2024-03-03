import { Router } from "@angular/router";
import { Route } from "@ccchymns.com/common";
import { StoragePath } from "apps/admin.ccchymns.com/src/core";

 export function  getAudioLanguagePath(router:Router): string {
    const basePath = `/${Route.AUDIO_HYMNS}`;
    if (router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      return StoragePath.YORUBA;
    }

    if (router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      return StoragePath.ENGLISH;
    }

    if (router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      return StoragePath.EGUN;
    }

    return StoragePath.FRENCH;
  }
