// Core
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class CitGlobalConstantService {
    delete_record(delete_record: any, arg1: { id: any; }) {
      throw new Error('Method not implemented.');
    }
    base_price_download(base_price_download: any, arg1: string) {
      throw new Error('Method not implemented.');
    }
    baseUrl: string = environment.domain;
    alloy_wire_upload: string = this.baseUrl + "Alloy_wire_upload";
    alloy_wire_validate: string = this.baseUrl + "Alloy_wire_validate";

    alloy_billet_upload: string = this.baseUrl + "Alloy_billet_upload";
    alloy_billet_validate: string = this.baseUrl + "Alloy_billet_validate";

    scrap_upload: string = this.baseUrl + "scrap_upload";
    scrap_validate: string = this.baseUrl + "Alloy_scrap_validate";

    alloy_scrap_history: string = this.baseUrl + "alloy_surcharge_history";
    get_history_file_data: string = this.baseUrl + "getfile_data";

    //base price addition 
    smb: any = {
        base_price_data: this.baseUrl + "Base_Price_Data",
        get_record_base_price: this.baseUrl + "get_record_baseprice",
        delete_record: this.baseUrl + "delete_record_baseprice",
        base_price_upload: this.baseUrl + "Base_Price_Upload",
        base_price_validate: this.baseUrl + "Base_Price_validate",
        update_record_base_price: this.baseUrl + "update_record_baseprice",
        base_price_download: this.baseUrl + "Base_price_download",
    };
    smb_mini_bar: any = {
        base_price_data: this.baseUrl + "base_price_data_minibar",
        get_record_base_price: this.baseUrl + "get_record_baseprice_minibar",
        delete_record: this.baseUrl + "delete_record_baseprice_minibar",
        base_price_upload: this.baseUrl + "base_price_upload_minibar",
        base_price_validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update_record_base_price: this.baseUrl + "update_record_baseprice",
        base_price_download: this.baseUrl + "base_price_download_minibar",
    };

     //base price addition 
     incoterm_exceptions: any = {
        incoterm_exceptions_list: this.baseUrl + "Base_Price_Data",
        get_incoterm_exceptions: this.baseUrl + "get_record_baseprice",
        delete_incoterm_exceptions_record: this.baseUrl + "delete_record_baseprice",
        incoterm_exceptions_upload: this.baseUrl + "Base_Price_Upload",
        incoterm_exceptions_validate: this.baseUrl + "Base_Price_validate",
        update_record_incoterm_exceptions: this.baseUrl + "update_record_baseprice",
        incoterm_exceptions_download: this.baseUrl + "Base_price_download",
    };
    incoterm_exceptions_mini_bar: any = {
        incoterm_exceptions_list: this.baseUrl + "base_price_data_minibar",
        get_incoterm_exceptions: this.baseUrl + "get_record_baseprice_minibar",
        delete_incoterm_exceptions_record: this.baseUrl + "delete_record_baseprice_minibar",
        incoterm_exceptions_upload: this.baseUrl + "base_price_upload_minibar",
        incoterm_exceptions_validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update_record_incoterm_exceptions: this.baseUrl + "update_record_baseprice",
        incoterm_exceptions_download: this.baseUrl + "base_price_download_minibar",
    };

}