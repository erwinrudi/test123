import { Injectable, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { environment } from './../environments/environment';
import 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
@Injectable()
export class GeneralService {
    readonly apiUrl: string = environment.apiUrl;
    readonly urlImg: string = environment.urlImg;
    loaderToShow: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        public toastController: ToastController,
        public loadingController: LoadingController
    ) { }


    goBack() {
        this.location.back();
    }


    formatterValue(value = '0', maxValue = '999999999', Currency = 'Rp. ', digitSplit = 3, point = ',') {
        // debugger
        var angka = value.replace(/,/g, '');
        angka = angka.replace(Currency, '');
        angka = angka.replace(/\D/g, '');
        return angka
    }

    formatterInput(value = '0', Currency = '', point = ',', floatPoint = '.') {
        // debugger

        let angkaTemp = value.split(floatPoint);
        let decimalVal = ""
        var angka;
        // debugger
        if (angkaTemp.length > 1) {
            angka = angkaTemp[0]
            angka = angka.replace(/,/g, '');
            angka = angka.replace(Currency, '');
            angka = angka.replace(/\D/g, '');
            decimalVal = floatPoint + angkaTemp[1]
        }
        else {
            angka = value.replace(/,/g, '');
            angka = angka.replace(Currency, '');
            angka = angka.replace(/\D/g, '');
            decimalVal = ""
        }

        var maxValue = '9999999999';
        var digitSplit = 3;


        if (parseInt(angka) > parseInt(maxValue)) {
            angka = maxValue
        }
        var lengthString = angka.length
        if (lengthString <= digitSplit) {
            if (angka == "") {
                return Currency + "0"
            }
            else {
                return Currency + parseInt(angka)
            }
        }
        if (lengthString > digitSplit) {
            var tempAngka = angka
            var digitSplice = lengthString % digitSplit
            tempAngka = tempAngka.slice(digitSplice)
            var tempLength = tempAngka.length
            var index = 0
            var splitter = []
            var hasil = ''

            for (var i = 0; i < tempLength; i++) {
                if (i % digitSplit == 0) {
                    hasil = hasil + point + tempAngka[i]
                }
                else {
                    hasil = hasil + tempAngka[i]
                }
            }
            if (digitSplice == 0) {
                hasil = hasil.replace(',', '');
            }
            else {
                for (var j = digitSplice; j >= 1; j--) {
                    // debugger
                    hasil = angka[j - 1] + hasil
                }
            }


            hasil = Currency + hasil + decimalVal
            return hasil
        }
    }


    async notification(messages = "test") {
        const toast = await this.toastController.create({
            message: messages,
            duration: 3000
        });
        toast.present();
    }

    async presentLoading(messages = "Please wait...") {
        return this.loadingController.create({
            message: messages
            // duration: 5000,
        });
    }

    async dismissLoading() {
        return this.loadingController.dismiss();
    }


    async showLoading(messages = "Please wait...") {
        return await this.loadingController.create({
            message: messages
            // duration: 5000,
        }).then(a => {
            a.present().then(() => {

            });
        });
    }

    async hideLoading() {
        return await this.loadingController.dismiss()
    }

    showLoader() {
        this.loaderToShow = this.loadingController.create({
            message: 'This Loader will Not AutoHide'
        }).then((res) => {
            res.present();
        });
    }

    hideLoader() {
        this.loadingController.dismiss();
    }

}