import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-invoice-search',
  templateUrl: 'invoice-search.page.html',
  styleUrls: ['invoice-search.page.scss']
})
export class InvoiceSearchPage {
  formInvoice: FormGroup;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.formInvoice = this.formBuilder.group({
      startDate: '',
      endDate: '',
      flightNumber: ''
    })

    this.isLoading = false;
  }

  onSubmit(e) {
    const formValue = this.formInvoice.value;

    let urlNext = "/billing/invoice-list"
    let nullParam = true
    if (formValue.startDate != "") {
      urlNext = urlNext + "?startDate=" + formValue.startDate
      nullParam = false
    }
    if (formValue.endDate != "") {
      if (nullParam == true) {
        urlNext = urlNext + "?endDate=" + formValue.endDate
        nullParam = false
      }
      else {
        urlNext = urlNext + "&endDate=" + formValue.endDate
      }
    }
    if (formValue.flightNumber != "") {
      if (nullParam == true) {
        urlNext = urlNext + "?flightNumber=" + formValue.flightNumber
        nullParam = false
      }
      else {
        urlNext = urlNext + "&flightNumber=" + formValue.flightNumber
      }
    }
    // urlNext = encodeURI(urlNext)
    localStorage.setItem("invoiceList", urlNext)
    this.router.navigateByUrl(urlNext)
  }

  back(){
    this.router.navigateByUrl("/billing/billing-menu")
  }
}
