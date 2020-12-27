import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgxPermissionsService } from 'ngx-permissions';

import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private permissionsService: NgxPermissionsService,
    private generalService: GeneralService,
  ) {
    // Get permissions from localstorage on page refresh

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  permissionStore(permissions) {
    this.permissionsService.loadPermissions(
      permissions,
      (permissionName, permissionStore) => {
        return !!permissionStore[permissionName];
      }
    );
  }
}
