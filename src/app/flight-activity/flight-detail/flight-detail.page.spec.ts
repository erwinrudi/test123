import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightDetailPage } from './flight-detail.page';

describe('FlightDetailPage', () => {
  let component: FlightDetailPage;
  let fixture: ComponentFixture<FlightDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightDetailPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


