import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaxFormPage } from './pax-form.page';

describe('PaxFormPage', () => {
  let component: PaxFormPage;
  let fixture: ComponentFixture<PaxFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaxFormPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaxFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


