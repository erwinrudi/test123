import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movement-form',
  templateUrl: 'movement-form.page.html',
  styleUrls: ['movement-form.page.scss']
})
export class MovementFormPage {
  formMovement: FormGroup;
  isLoading: boolean;
  pageType: string;

  formType = 0;

  standCodeList = [
    {
      value: 'a1',
      text: 'A1'
    },
    {
      value: 'a2',
      text: 'A2'
    },
  ]

  movTypeList = [
    {
      value: 'normal',
      text: 'Normal'
    },
    {
      value: 'unnormal',
      text: 'Un Normal'
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formMovement = this.formBuilder.group({
      inBlock: '',
      offBlock: '',
      standCode: '',
      movType: ''
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
