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

  ngOnInit() {

  }

  getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    if (typeof params.token != "undefined") {
      let getToken = params.token;
      localStorage.clear();
      localStorage.setItem("oldtoken", getToken)
      this.homeService.getDataUser(getToken).subscribe((rows: any) => {
        let data = rows.data
        localStorage.setItem("token", data.token)
        localStorage.setItem("branch", data.branch_code)
        this.setPermission(data.permission)
        this.router.navigate(['/']);
      },
        error => {
          if (error.error) {
            this.generalService.notification(error.error.message)
          }
          else {
            this.generalService.notification("ERROR CONNECTION")
          }
        }
      );
    }
  }

  setPermission(permis = []) {
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
        permissions.push('update_' + moduleName);
      }
    })

    this.generalService.setPermissions(permissions);
  }

  onClickFlight() {
    let canWrite = this.generalService.permissionCekker("write_flightact")
    let canRead = this.generalService.permissionCekker("read_flightact")
    if (canWrite == true && canRead == true) {
      this.router.navigateByUrl("/flight/flight-menu")
    }
    else if (canWrite == true) {
      this.router.navigateByUrl("/flight/create-menu")
    }
    else if (canRead == true) {
      this.router.navigateByUrl("/flight/schedule-search")
    }
  }
}
