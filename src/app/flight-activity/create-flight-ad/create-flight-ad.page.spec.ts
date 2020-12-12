import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateFlightAdPage } from './create-flight-ad.page';

describe('CreateFlightAdPage', () => {
  let component: CreateFlightAdPage;
  let fixture: ComponentFixture<CreateFlightAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlightAdPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFlightAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


