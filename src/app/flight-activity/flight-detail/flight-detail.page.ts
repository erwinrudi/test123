import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail-menu',
  templateUrl: 'flight-detail.page.html',
  styleUrls: ['flight-detail.page.scss']
})
export class FlightDetailPage {
  modal = null;
  typeList = [
    {
      value: 'movement',
      text: 'Movement'
    },
    {
      value: 'avio',
      text: 'Avio'
    },
    {
      value: 'pax',
      text: 'Pax'
    },
  ]
  type = "";
  pax = {
    type: 'arrival',

    arrival: {
      adult: 50,
      child: 10,
      infant: 50,
      transit: 10,
      transfer: 50,
      ctew: 10,
      exCrew: 50,
      divert: 10,
      missed: 50,
      counter: 10
    },

    departure: {
      adult: 50,
      child: 10,
      infant: 50,
      transit: 10,
      transfer: 50,
      ctew: 10,
      exCrew: 50,
      divert: 10,
      missed: 50,
      counter: 10
    }
  }


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onChangeType(e) {
    this.type = e.value
  }

  onChangePaxType(val) {
    this.pax.type = val
  }

  showModal(content = null) {
    this.modal = content;
  }
}
