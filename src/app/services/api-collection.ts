// Core
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class CitGlobalConstantService {
    baseUrl: string = environment.domain;
    alloy_wire_upload: string = this.baseUrl + "Alloy_wire_upload";
    alloy_wire_validate: string = this.baseUrl + "Alloy_wire_validate";

    alloy_billet_upload: string = this.baseUrl + "Alloy_billet_upload";
    alloy_billet_validate: string = this.baseUrl + "Alloy_billet_validate";

    scrap_upload: string = this.baseUrl + "scrap_upload";
    scrap_validate: string = this.baseUrl + "Alloy_scrap_validate";

    alloy_scrap_history: string = this.baseUrl + "alloy_surcharge_history";
    get_history_file_data: string = this.baseUrl + "getfile_data"

    //base price addition 
    base_price_data: string = this.baseUrl + "Base_Price_Data";
    get_record_base_price: string = this.baseUrl + "get_record_baseprice"
    delete_record: string = this.baseUrl + "delete_record_baseprice"
    base_price_upload: string = this.baseUrl + "Base_Price_Upload"
    base_price_validate: string = this.baseUrl + "Base_Price_validate";
    update_record_base_price: string = this.baseUrl + "update_record_baseprice"
}