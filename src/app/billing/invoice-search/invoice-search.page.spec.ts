import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoiceSearchPage } from './invoice-search.page';

describe('InvoiceSearchPage', () => {
  let component: InvoiceSearchPage;
  let fixture: ComponentFixture<InvoiceSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceSearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


