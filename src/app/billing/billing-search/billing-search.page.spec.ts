import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillingSearchPage } from './billing-search.page';

describe('BillingSearchPage', () => {
  let component: BillingSearchPage;
  let fixture: ComponentFixture<BillingSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingSearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillingSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


