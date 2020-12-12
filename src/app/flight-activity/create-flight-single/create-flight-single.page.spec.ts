import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateFlightSinglePage } from './create-flight-single.page';

describe('CreateFlightSinglePage', () => {
  let component: CreateFlightSinglePage;
  let fixture: ComponentFixture<CreateFlightSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlightSinglePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFlightSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


