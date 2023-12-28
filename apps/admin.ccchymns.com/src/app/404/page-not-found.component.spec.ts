import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { Store, StoreModule } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { LANGUAGE_RESOURCE_TOKEN, LanguageResourceService } from '@ccchymns.com/angular';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoundComponent, StoreModule.forRoot({})],
      providers: [
        Title,
        Store,
        {
          provide: LANGUAGE_RESOURCE_TOKEN,
          useClass: LanguageResourceService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
