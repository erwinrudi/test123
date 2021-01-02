import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportSearchPage } from './report-search.page';

describe('ReportSearchPage', () => {
  let component: ReportSearchPage;
  let fixture: ComponentFixture<ReportSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportSearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


