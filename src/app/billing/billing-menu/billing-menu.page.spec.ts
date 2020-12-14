import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillingMenuPage } from './billing-menu.page';

describe('BillingMenuPage', () => {
  let component: BillingMenuPage;
  let fixture: ComponentFixture<BillingMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingMenuPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillingMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


