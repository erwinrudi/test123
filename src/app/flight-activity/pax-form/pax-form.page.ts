import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-pax-form',
  templateUrl: 'pax-form.page.html',
  styleUrls: ['pax-form.page.scss']
})
export class PaxFormPage {
  formPax: FormGroup;
  isLoading: boolean;
  pageType: string;

  formType = 0;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private generalService: GeneralService
  ) {

  }
  ngOnInit() {
    this.formPax = this.formBuilder.group({
      adult_ar: '',
      child_ar: '',
      infant_ar: '',
      transit_ar: '',
      transfer_ar: '',
      ctew_ar: '',
      exCrew_ar: '',
      divert_ar: '',
      missed_ar: '',
      counter_ar: '',

      adult_der: '',
      child_der: '',
      infant_der: '',
      transit_der: '',
      transfer_der: '',
      ctew_der: '',
      exCrew_der: '',
      divert_der: '',
      missed_der: '',
      counter_der: ''
    })

    const id = this.route.snapshot.params["id"];

    if (id) {
      this.pageType = "edit";
    } else {
      this.pageType = "new";
    }

    this.isLoading = false;
  }

  onSubmit(e) {

  }

  onChangeType(type) {
    this.formType = type
  }


}
