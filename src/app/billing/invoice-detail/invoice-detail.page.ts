import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: 'invoice-detail.page.html',
  styleUrls: ['invoice-detail.page.scss']
})
export class InvoiceDetailPage {
  isLoading: boolean;
  statusList = [
    {
      value: 'complete',
      text: 'Complete'
    },
    {
      value: 'incomplete',
      text: 'Incomplete'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private location: Location
  ) {

  }
  
  ngOnInit() {
   
  }

  back(){
    let url = localStorage.getItem("invoiceList")
    this.router.navigateByUrl(url)
  }
}
