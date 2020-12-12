import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduleFormPage } from './schedule-form.page';

describe('ScheduleFormPage', () => {
  let component: ScheduleFormPage;
  let fixture: ComponentFixture<ScheduleFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleFormPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


