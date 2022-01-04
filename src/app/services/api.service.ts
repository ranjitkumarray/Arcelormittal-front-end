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
    get_request_header(url: any) {
        let headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-access-token', "0cP$mb");
        return this.https.get(url, {
            headers: headers
        })
    }
    post_request_header(url: any, param: any) {
        let headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-access-token', "0cP$mb");
        return this.https.post(url, param, {
            headers: headers
        })
    }
    put_request_header(url: any, param: any) {
        let headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-access-token', "0cP$mb");
        return this.https.put(url, param, {
            headers: headers
        })
    }
    patch_request_header(url: any, param: any) {
        let headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-access-token', "0cP$mb");

        return this.https.patch(url, param, {
            headers: headers
        })
    }
    get_request_Param(url: any, param: any) {
        return this.https.get(url, {
            params: param
        })
    }
    get_request_header_Param(url: any, param: any) {
        let headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-access-token', "0cP$mb");
        return this.https.get(url, {
            params: param,
            headers: headers
        })
    }
    delete_request_header_Param(url: any, param: any) {
        let headers: any = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.append('x-access-token', "0cP$mb");
        return this.https.delete(url, {
            params: param,
            headers: headers
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