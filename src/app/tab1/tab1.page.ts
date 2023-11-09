import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public RTMP_URL: string = "";
  public RTMP_KEY: string = "";

  public ionicRTMPandHLS: any;
  constructor() {
    this.ionicRTMPandHLS = (<any>window).cordova.plugin.ionicrtmphls;
  }

  previewCamera() {
    this.ionicRTMPandHLS.previewCamera({}, (res: any) => {
      console.log('SUCCESS previewCamera', res)
    }, (err: any) => {
      console.log('ERROR previewCamera', err);
    });

  }

  closeCamera() {
    this.ionicRTMPandHLS.closeCameraPreview((res: any) => {
      console.log('SUCCESS closeCameraPreview', res)
    }, (err: any) => {
      console.log('ERROR closeCameraPreview', err);
    });
  }

  startBroadcasting() {
    this.ionicRTMPandHLS.startBroadcasting(this.RTMP_URL, this.RTMP_KEY, (res: any) => {
      console.log('SUCCESS startBroadcasting', res)
    }, (err: any) => {
      console.log('ERROR startBroadcasting', err);
    });
  }

  stopBroadcasting() {
    this.ionicRTMPandHLS.stopBroadcasting((res: any) => {
      console.log('SUCCESS stopBroadcastConfirmation', res)
    }, (err: any) => {
      console.log('ERROR stopBroadcastConfirmation', err);
    });
  }

  swapCamera() {
    this.ionicRTMPandHLS.swapCamera((res: any) => {
      console.log('SUCCESS swapCamera', res)
    }, (err: any) => {
      console.log('ERROR swapCamera', err);
    });
  }

  requestPermissions() {
    this.ionicRTMPandHLS.requestPermissions((res: any) => {
      console.log('SUCCESS requestPermissions', res)
    }, (err: any) => {
      console.log('ERRR requestPermissions', err);
    });
  }
}
