import { FormControl } from "@angular/forms";
import { IHymnLyricsUIState } from "@ccchymns.com/common";

export type ILyricsForm = {
  [Key in keyof IHymnLyricsUIState]: FormControl<
    IHymnLyricsUIState[Key] | null
  >;
};
