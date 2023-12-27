import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
   it('should have a static property ADD_AUDIO_HYMNS with the correct value', () => {
     expect(LanguageResourceKey.ADD_AUDIO_HYMNS).toBe('add_audio_space');
   });

   it('should have a static property EMPTY_STATE_DESCRIPTION with the correct value', () => {
     expect(LanguageResourceKey.EMPTY_STATE_DESCRIPTION).toBe(
       'audio_space_empty_state_description'
     );
   });

   it('should have a static property FILTER_AUDIO_MSG with the correct value', () => {
     expect(LanguageResourceKey.FILTER_AUDIO_MSG).toBe(
       'filter_audio_space_msg'
     );
   });

   it('should have a static property UPLOAD_AUDIO_SPACE with the correct value', () => {
     expect(LanguageResourceKey.UPLOAD_AUDIO_SPACE).toBe('upload_audio_space');
   });

   it('should have a static property AUDIO_SPACE_REQUIRED_MSG with the correct value', () => {
     expect(LanguageResourceKey.AUDIO_SPACE_REQUIRED_MSG).toBe(
       'audio_space_required_msg'
     );
   });

});
