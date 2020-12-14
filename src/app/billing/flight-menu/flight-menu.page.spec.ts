import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightMenuPage } from './flight-menu.page';

describe('FlightMenuPage', () => {
  let component: FlightMenuPage;
  let fixture: ComponentFixture<FlightMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightMenuPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


