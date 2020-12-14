import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-menu',
  templateUrl: 'flight-detail.page.html',
  styleUrls: ['flight-detail.page.scss']
})
export class FlightDetailPage {
  modal = null;
  isLoading: boolean;
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
  ];

  type = "movement";

  flightInfo = {
    id: '',
    arrival: {
      terminal: 'Terminal 3U',
      flightNo: 'GA 001',
      flightType: 'Int',
      from: 'SIN',
      to: 'CGK',
      ata: '5 Nov 2020 09:00',
      eta: '5 Nov 2020 09:00',
      regNo: 'PKGLO - 3210',
      remark: ''
    },
    departure: {
      terminal: 'Terminal 3US',
      flightNo: 'GA 001',
      flightType: 'Int',
      from: 'SIN',
      to: 'CGK',
      ata: '5 Nov 2020 09:00',
      eta: '5 Nov 2020 09:00',
      regNo: 'PKGLO - 3220',
      remark: ''
    }
  };

  pax = {
    type: 'arrival',
    id: 0,
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
  };

  movementList = [
    {
      id: '0',
      title: 'Flight Activity Movement',
      inBlock: '25 November 2020 9.10',
      offBlock: '25 November 2020 9.10',
      standCode: 'A1',
      movType: 'Normal'
    },
    {
      id: '1',
      title: 'Flight Activity Movement',
      inBlock: '26 November 2020 9.10',
      offBlock: '26 November 2020 9.10',
      standCode: 'A2',
      movType: 'Normal'
    }
  ];

  avio = {
    id: 0,
    arrival: {
      startTime: '25 November 2020 9.10',
      endTime: '25 November 2020 10.10',
      frq: '1',
      mov: '1'
    },
    departure: {
      startTime: '26 November 2020 9.10',
      endTime: '26 November 2020 10.10',
      frq: '2',
      mov: '2'
    }
  }

  constructor(
    private route: ActivatedRoute,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    //  this.present()
    this.route.params.subscribe(param => {
      this.flightInfo.id = param.id;
    });
  }

  async present(messages = "Please wait...") {
    this.isLoading = true;
    return await this.loadingController.create({
      message: messages
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss()
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss()
  }

  onChangeType(e) {
    this.type = e
  }

  onChangePaxType(val) {
    this.pax.type = val
  }

  showModal(content = null) {
    this.modal = content;
  }
}
