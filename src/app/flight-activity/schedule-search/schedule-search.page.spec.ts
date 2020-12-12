import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduleSearchPage } from './schedule-search.page';

describe('ScheduleSearchPage', () => {
  let component: ScheduleSearchPage;
  let fixture: ComponentFixture<ScheduleSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleSearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


