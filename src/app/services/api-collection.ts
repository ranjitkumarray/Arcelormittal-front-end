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

    //incoterm exceptions 
    incoterm_exceptions: any = {
        incoterm_exceptions_list: this.baseUrl + "data_baseprice_incoterm",
        get_incoterm_exceptions: this.baseUrl + "get_record_baseprice_incoterm",
        delete_incoterm_exceptions_record: this.baseUrl + "delete_record_baseprice_incoterm",
        incoterm_exceptions_upload: this.baseUrl + "upload_baseprice_incoterm",
        incoterm_exceptions_validate: this.baseUrl + "validate_baseprice_incoterm",
        update_record_incoterm_exceptions: this.baseUrl + "update_record_baseprice",
        incoterm_exceptions_download: this.baseUrl + "download_baseprice_incoterm",
    };
    incoterm_exceptions_mini_bar: any = {
        incoterm_exceptions_list: this.baseUrl + "data_baseprice_incoterm",
        get_incoterm_exceptions: this.baseUrl + "get_record_baseprice_incoterm",
        delete_incoterm_exceptions_record: this.baseUrl + "delete_record_baseprice_incoterm",
        incoterm_exceptions_upload: this.baseUrl + "upload_baseprice_incoterm",
        incoterm_exceptions_validate: this.baseUrl + "validate_baseprice_incoterm",
        update_record_incoterm_exceptions: this.baseUrl + "update_record_baseprice",
        incoterm_exceptions_download: this.baseUrl + "download_baseprice_incoterm",
    };
    //certificate 
    certificate: any = {
        list: this.baseUrl + "data_extra_certificate",
        get: this.baseUrl + "get_record_extra_certificate",
        delete: this.baseUrl + "delete__record_extra_certificate",
        upload: this.baseUrl + "upload_extra_certificate",
        validate: this.baseUrl + "validate_extra_certificate",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "download_extra_certificate",
    };
    certificate_mini_bar: any = {
        list: this.baseUrl + "data_extra_certificate_minibar",
        get: this.baseUrl + "get_record_extra_certificate_minibar",
        delete: this.baseUrl + "delete_extra_certificate_minibar",
        upload: this.baseUrl + "upload_extra_certificate_minibar",
        validate: this.baseUrl + "validate_extra_certificate_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "download_extra_certificate_minibar",
    };

    //freight_parity 
    freight_parity: any = {
        list: this.baseUrl + "data_freight_parity",
        get: this.baseUrl + "get_record_freight_parity",
        delete: this.baseUrl + "delete_record_freight_parity",
        upload: this.baseUrl + "upload_freight_parity",
        validate: this.baseUrl + "validate_freight_parity",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_freight_parity",
    };
    freight_parity_mini_bar: any = {
        list: this.baseUrl + "data_freight_parity_minibar",
        get: this.baseUrl + "get_record_freight_parity_minibar",
        delete: this.baseUrl + "delete_record_freight_parity_minibar",
        upload: this.baseUrl + "upload_freight_parity_minibar",
        validate: this.baseUrl + "validate_freight_parity_minibar",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_freight_parity_minibar",
    };
    //delivery_mill 
    delivery_mill: any = {
        list: this.baseUrl + "data_delivery_mill",
        get: this.baseUrl + "get_record_delivery_mill",
        delete: this.baseUrl + "delete_record_delivery_mill",
        upload: this.baseUrl + "upload_delivery_mill",
        validate: this.baseUrl + "validate_delivery_mill",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_delivery_mill",
    };
    delivery_mill_mini_bar: any = {
        list: this.baseUrl + "data_delivery_mill_minibar",
        get: this.baseUrl + "get_record_delivery_mill_minibar",
        delete: this.baseUrl + "delete_record_delivery_mill_minibar",
        upload: this.baseUrl + "upload_delivery_mill_minibar",
        validate: this.baseUrl + "validate_delivery_mill_minibar",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_delivery_mill_minibar",
    };
    //grade 
    grade: any = {
        list: this.baseUrl + "data_extra_grade",
        get: this.baseUrl + "get_record_extra_grade",
        delete: this.baseUrl + "delete_record_extra_grade",
        upload: this.baseUrl + "upload_extra_grade",
        validate: this.baseUrl + "validate_extra_grade",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_freight_extra_grade",
    };
    grade_mini_bar: any = {
        list: this.baseUrl + "data_extra_grade_minibar",
        get: this.baseUrl + "get_record_extra_grade_minibar",
        delete: this.baseUrl + "delete_record_extra_grade_minibar",
        upload: this.baseUrl + "upload_extra_grade_minibar",
        validate: this.baseUrl + "validate_extra_grade_minibar",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_extra_grade_minibar",
    };

    //length_logistic 
    length_logistic: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };
    length_logistic_mini_bar: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };

    //length_production 
    length_production: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };
    length_production_mini_bar: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };

    //profile 
    profile: any = {
        list: this.baseUrl + "data_extra_profile",
        get: this.baseUrl + "get_record_extra_profile",
        delete: this.baseUrl + "delete_record_extra_profile",
        upload: this.baseUrl + "upload_extra_profile",
        validate: this.baseUrl + "validate_extra_profile",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_extra_profile",
    };
    profile_mini_bar: any = {
        list: this.baseUrl + "data_extra_profile_minibar",
        get: this.baseUrl + "get_record_extra_profile_minibar",
        delete: this.baseUrl + "delete_record_extra_profile_minibar",
        upload: this.baseUrl + "upload_extra_profile_minibar",
        validate: this.baseUrl + "validate_extra_profile_minibar",
        update: this.baseUrl + "",
        download: this.baseUrl + "download_extra_profile_minibar",
    };

    //profile_lberia_italy 
    profile_lberia_italy: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };
    profile_lberia_italy_mini_bar: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };

    //transport_mode 
    transport_mode: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };
    transport_mode_mini_bar: any = {
        list: this.baseUrl + "base_price_data_minibar",
        get: this.baseUrl + "get_record_baseprice_minibar",
        delete: this.baseUrl + "delete_record_baseprice_minibar",
        upload: this.baseUrl + "base_price_upload_minibar",
        validate: this.baseUrl + "base_price_validate_baseprice_minibar",
        update: this.baseUrl + "update_record_baseprice",
        download: this.baseUrl + "base_price_download_minibar",
    };
}