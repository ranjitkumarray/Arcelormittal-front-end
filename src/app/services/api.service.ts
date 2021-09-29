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
}