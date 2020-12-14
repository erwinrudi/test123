import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvioFormPage } from './avio-form.page';

describe('AvioFormPage', () => {
  let component: AvioFormPage;
  let fixture: ComponentFixture<AvioFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvioFormPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvioFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


