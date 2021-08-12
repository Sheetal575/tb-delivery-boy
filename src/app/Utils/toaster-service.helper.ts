import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export enum ToastMessageType {
    ERROR,
    WARNING,
    INFO,
    SUCCESS
}
@Injectable({
  providedIn: 'root'
})
export class ToastMessage{
  static showToastr(arg0: string, arg1: string, ERROR: ToastMessageType) {
    throw new Error('Method not implemented.');
  }

  constructor(private toastr: ToastrService) { }

  public showToaster(title: string, message: string, messageType: ToastMessageType) {
      switch (messageType) {
          case ToastMessageType.SUCCESS: {
              this.toastr.success(message, title);
          }
          case ToastMessageType.WARNING: {
              this.toastr.warning(message, title);
          }
          case ToastMessageType.INFO: {
              this.toastr.info(message, title);
          }
          case ToastMessageType.ERROR: {
              this.toastr.error(message, title);
          }
      }
  }
}


