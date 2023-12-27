import { DashboardLanguageResourceKey } from './language-resource-key';

describe('DashboardLanguageResourceKey', () => {
  it('should have a static property PAGE_TITLE with the correct value', () => {
    expect(DashboardLanguageResourceKey.PAGE_TITLE).toBe('dashboard_title');
  });

  it('should have a static property LOGOUT with the correct value', () => {
    expect(DashboardLanguageResourceKey.LOGOUT).toBe('logout');
  });

  it('should have a static property DASHBOARD with the correct value', () => {
    expect(DashboardLanguageResourceKey.DASHBOARD).toBe('dashboard');
  });

  it('should have a static property PREVIOUS_PAGE with the correct value', () => {
    expect(DashboardLanguageResourceKey.PREVIOUS_PAGE).toBe('previous_page');
  });

  it('should have a static property NEXT_PAGE with the correct value', () => {
    expect(DashboardLanguageResourceKey.NEXT_PAGE).toBe('next_page');
  });

  it('should have a static property EDIT with the correct value', () => {
    expect(DashboardLanguageResourceKey.EDIT).toBe('edit');
  });

  it('should have a static property DELETE with the correct value', () => {
    expect(DashboardLanguageResourceKey.DELETE).toBe('delete');
  });

  it('should have a static property SORT_MSG with the correct value', () => {
    expect(DashboardLanguageResourceKey.SORT_MSG).toBe('sort_msg');
  });

  it('should have a static property EMPTY_STATE_TITLE with the correct value', () => {
    expect(DashboardLanguageResourceKey.EMPTY_STATE_TITLE).toBe(
      'empty_state_title'
    );
  });

  it('should have a static property TRY_AGAIN with the correct value', () => {
    expect(DashboardLanguageResourceKey.TRY_AGAIN).toBe('try_again');
  });

  it('should have a static property ERROR_STATE_DESC with the correct value', () => {
    expect(DashboardLanguageResourceKey.ERROR_STATE_DESC).toBe(
      'error_state_description'
    );
  });

  it('should have a static property HYMN_NO with the correct value', () => {
    expect(DashboardLanguageResourceKey.HYMN_NO).toBe('hymn_no');
  });

  it('should have a static property EDIT_HYMN with the correct value', () => {
    expect(DashboardLanguageResourceKey.EDIT_HYMN).toBe('edit_hymn');
  });

  it('should have a static property ADD_HYMN with the correct value', () => {
    expect(DashboardLanguageResourceKey.ADD_HYMN).toBe('add_hymn');
  });

  it('should have a static property OPTIONS with the correct value', () => {
    expect(DashboardLanguageResourceKey.OPTIONS).toBe('options');
  });

  it('should have a static property UPLOAD with the correct value', () => {
    expect(DashboardLanguageResourceKey.UPLOAD).toBe('upload');
  });

  it('should have a static property PUBLISHED with the correct value', () => {
    expect(DashboardLanguageResourceKey.PUBLISHED).toBe('published');
  });

  it('should have a static property VALID_HYMN_NO_MSG with the correct value', () => {
    expect(DashboardLanguageResourceKey.VALID_HYMN_NO_MSG).toBe(
      'valid_hymn_no_msg'
    );
  });
});
