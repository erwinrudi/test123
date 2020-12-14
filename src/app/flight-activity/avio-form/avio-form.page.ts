import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-avio-form',
  templateUrl: 'avio-form.page.html',
  styleUrls: ['avio-form.page.scss']
})
export class AvioFormPage {
  formAvio: FormGroup;
  isLoading: boolean;
  pageType: string;

  formType = 0;

  movList= [
    {
        value: '1',
        text: '1'
    },
    {
        value: '2',
        text: '2'
    },
    {
        value: '3',
        text: '3'
    },
    {
        value: '4',
        text: '4'
    },
    {
        value: '5',
        text: '5'
    }
]

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formAvio = this.formBuilder.group({
      startTime_ar: '',
      endTime_ar: '',
      frq_ar: '',
      mov_ar: '',

      startTime_der: '',
      endTime_der: '',
      frq_der: '',
      mov_der: ''
    })

    const id = this.route.snapshot.params["id"];

    if (id === "new") {
      this.pageType = "new";
    } else {
      this.pageType = "edit";
    }

    this.isLoading = false;
  }

  onSubmit(e) {

  }

  onChangeType(type) {
    this.formType = type
  }


}
