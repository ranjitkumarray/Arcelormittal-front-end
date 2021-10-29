import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()

export class ApiService {
    baseURI: string = environment.domain;
    selectedIndex: any = '';
    constructor(
        private https: HttpClient,
        private _snackBar: MatSnackBar,

    ) { }
    get_request(url: any) {
        return this.https.get(url);
    }
    post_request(url: any, param: any) {
        return this.https.post(url, param)
    }
    put_request(url: any, param: any) {
        return this.https.put(url, param)
    }
    patch_request(url: any, param: any) {
        return this.https.patch(url, param)
    }
    get_request_Param(url: any, param: any) {
        return this.https.get(url, {
            params: param
        })
    }
    delete_request_Param(url: any, param: any) {
        return this.https.delete(url, {
            params: param
        })
    }
    popupMessage(statusType: any, message: any) {
        if (statusType === 'success') {
            this._snackBar.open(message, "", {
                duration: 4000,
                panelClass: ['success'],
                horizontalPosition: 'end',
                verticalPosition: 'bottom',
            });
        } else {
            this._snackBar.open(message, "", {
                duration: 4000,
                panelClass: ['error'],
                horizontalPosition: 'end',
                verticalPosition: 'bottom',
            });
        }

    }
}