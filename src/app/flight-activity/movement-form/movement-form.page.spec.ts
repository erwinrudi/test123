import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovementFormPage } from './movement-form.page';

describe('MovementFormPage', () => {
  let component: MovementFormPage;
  let fixture: ComponentFixture<MovementFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovementFormPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovementFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


