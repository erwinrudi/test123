import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargoFormPage } from './cargo-form.page';

describe('CargoFormPage', () => {
  let component: CargoFormPage;
  let fixture: ComponentFixture<CargoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CargoFormPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


