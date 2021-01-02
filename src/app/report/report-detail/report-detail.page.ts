import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { GeneralService } from "../../general.service";

@Component({
  selector: 'app-report-detail',
  templateUrl: 'report-detail.page.html',
  styleUrls: ['report-detail.page.scss']
})
export class ReportDetailPage {
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
    this.isLoading = false;
  }

  back(){
    let url = localStorage.getItem("reportList")
    this.router.navigateByUrl(url)
  }
}
