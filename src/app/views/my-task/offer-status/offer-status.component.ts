import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer-status',
  templateUrl: './offer-status.component.html',
  styleUrls: ['./offer-status.component.scss']
})
export class OfferStatusComponent implements OnInit {

  displayedColumns_wire: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'Customer_ID', 'Internal_Grade'];
  displayedColumns_billet: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'WARENEMPFAENGER_NR', 'Materialnr', 'dRUCKSPERRE'];
  displayedColumns_scrap: string[] = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Model', 'Amount']
  tab: any;
  table_data: any;
  data: any = { "inputaction": '' };
  alloy_surcharge_billet: any;
  alloy_surcharge_wire: any;
  scrap_surcharge_billet: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = { "inputaction": '' }

    this.http.post('http://127.0.0.1:5000/Alloy_scrap', this.data).subscribe(
      (data) => {
        this.table_data = data


        this.alloy_surcharge_wire = this.table_data.wire

        this.alloy_surcharge_billet = this.table_data.billet
        this.scrap_surcharge_billet = this.table_data.scrap


        this.alloy_surcharge_wire = JSON.parse(this.alloy_surcharge_wire)
        this.alloy_surcharge_billet = JSON.parse(this.alloy_surcharge_billet)

        this.scrap_surcharge_billet = JSON.parse(this.scrap_surcharge_billet)

        // console.log(this.alloy_surcharge_billet)
        // console.log(this.alloy_surcharge_wire)    
        // this.dataSource=JSON.parse(this.alloy_surcharge_wire)

      })

  }




  submitdata() {

    window.location.reload()
    this.data = { "inputaction": 'validated_wire' }
    this.http.post('http://127.0.0.1:5000/Alloy_scrap', this.data).subscribe(
      (data) => {
        console.log("success")
      })
    window.setTimeout(function () { location.reload() }, 3000)
  }

  submitdata1() {
    this.data = { "inputaction": 'validated_billet' }
    this.http.post('http://127.0.0.1:5000/Alloy_scrap', this.data).subscribe(
      (data) => {
        console.log("success")
      })
    window.setTimeout(function () { location.reload() }, 3000)
  }



  submitdata2() {
    this.data = { "inputaction": 'validated_scrap' }
    this.http.post('http://127.0.0.1:5000/Alloy_scrap', this.data).subscribe(
      (data) => {
        console.log("success")
      })
    window.setTimeout(function () { location.reload() }, 3000)
  }
  ontabchange(event: any) {
    alert('hooo')
  }
}
