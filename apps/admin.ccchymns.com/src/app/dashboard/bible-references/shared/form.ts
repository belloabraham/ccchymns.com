import { FormControl } from "@angular/forms";
import { IBibleReferenceUIState } from "@ccchymns.com/common";

export type IBibleReferenceForm = {
  [Key in keyof IBibleReferenceUIState]: FormControl<
    IBibleReferenceUIState[Key] | null
  >;
};
