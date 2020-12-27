import { Component } from '@angular/core';
import * as moment from "moment";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeService } from './home.service';
import { GeneralService } from "../general.service";
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
    private generalService: GeneralService,
    private permissionsService: NgxPermissionsService,
  ) {
    this.getQueryParams();

    const permissionsTemp = this.generalService.getPermissionsLocal();
    if (permissionsTemp) {
      this.permissionStore(permissionsTemp);
    }
    // Observe variable permissions change
    this.generalService.getPermissions().subscribe(permissions => {
      this.permissionStore(permissions);
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

  ngOnInit(){

  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    if (typeof params.token != "undefined") {
      let getToken = params.token;
      localStorage.setItem('token', getToken)
      this.setToken()
      this.router.navigateByUrl('/');
      // this.homeService.getDataUser(getToken).subscribe((rows: any) => {

      // },
      //   error => {
      //     if (error.response) {
      //       this.generalService.notification(error.response.message)
      //     }
      //     else {
      //       this.generalService.notification("ERROR CONNECTION")
      //     }
      //   }
      // );
    }
  }

  setToken() {
    let tempPermissions = "[{\"MENU_KEY\":\"flightact\",\"MENU_NAME\":\"Flight Activity\",\"create\":1,\"read\":1,\"update\":1,\"delete\":0},{\"MENU_KEY\":\"avio\",\"MENU_NAME\":\"Avio\",\"create\":0,\"read\":0,\"update\":0,\"delete\":0},{\"MENU_KEY\":\"pax\",\"MENU_NAME\":\"Pax\",\"create\":0,\"read\":0,\"update\":0,\"delete\":0},{\"MENU_KEY\":\"movement\",\"MENU_NAME\":\"Movement\",\"create\":0,\"read\":0,\"update\":0,\"delete\":0},{\"MENU_KEY\":\"billing\",\"MENU_NAME\":\"Billing\",\"create\":0,\"read\":1,\"update\":0,\"delete\":0},{\"MENU_KEY\":\"report\",\"MENU_NAME\":\"Report\",\"create\":0,\"read\":0,\"update\":0,\"delete\":0}]"
    let permis = JSON.parse(tempPermissions)
    let permissions = []
    permis.map(access => {
      const moduleName = access.MENU_KEY;
      if (access.read === 1) {
        permissions.push('read_' + moduleName);
      }
      if (access.create === 1) {
        permissions.push('write_' + moduleName);
      }
      if (access.delete === 1) {
        permissions.push('delete_' + moduleName);
      }
      if (access.update === 1) {
        permissions.push('update' + moduleName);
      }
    })

    this.generalService.setPermissions(permissions);
  }

}
