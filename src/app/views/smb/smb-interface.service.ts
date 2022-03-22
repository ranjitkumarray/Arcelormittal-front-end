export interface basePriceAddtionData {
    "sequence_id": any,
    'BusinessCode': any
    'Market_Country': any
    'Product_Division': any
    'Product_Level_02': any
    'Customer_Group': any
    'Market_Customer': any
    'Beam_Category': any
    'document_item_currency': any
    'Amount': any
    'Currency': any
    'action': any
}

export interface incotermExceptionsData {
    "sequence_id": any,
    'Market_Country': any,
    'Product_Division': any,
    'Incoterm1': any,
    'Customer_Group': any,
    'Beam_Category': any,
    'Delivering_Mill': any,
    'Document_Item_Currency': any,
    'Amount': any,
    'Currency': any,
    "action": any
}
export interface certificateData {
    "sequence_id": any,
    'BusinessCode': any,
    'Certificate': any,
    'Grade_Category': any,
    'Market_Country': any,
    'Document_Item_Currency': any,
    'Delivering_Mill': any,
    'Amount': any,
    'Currency': any,
    'Market_Customer': any,
    'Customer_Group': any,
    "action": any

}
export interface freightParityData {
    "sequence_id": any,
    "Delivering_Mill": any,
    "Market_Country": any,
    "Zip_Code_Dest": any,
    "Product_Division": any,
    "Document_Item_Currency": any,
    "Amount": any,
    "Currency": any,
    "Market_Customer": any,
    "Market_Customer_Group": any,
    "action": any

}

export interface gradeData {
    "sequence_id": any,
    'BusinessCode': any,
    'Grade_Category': any,
    'Country_Group': any,
    'Customer_Group': any,
    'Market_Country': any,
    'Document_Item_Currency': any,
    'Product_Division': any,
    'Market_Customer': any,
    'Amount': any,
    'Currency': any,
    "action": any

}

export interface lengthLogisticData {
    "sequence_id": any,
    'Country_Group': any,
    'Market_Country': any,
    'Delivering_Mill': any,
    'Length': any,
    'Transport_Mode': any,
    'Document_Item_Currency': any,
    'Market_Customer': any,
    'Amount': any,
    'Currency': any,
    "action": any

}
export interface lengthProductionData {
    "sequence_id": any,
    'BusinessCode': any,
    'Market_Country': any,
    'Delivering_Mill': any,
    'Length': any,
    'Document_Item_Currency': any,
    'Country_Group': any,
    'Market_Customer': any,
    'Customer_Group': any,
    'Amount': any,
    'Currency': any,
    'action': any,
}
export interface profileData {
    "sequence_id": any,
    'BusinessCode': any,
    'Market_Country': any,
    'Product_Level_04': any,
    'Product_Level_05': any,
    'Product_Level_02': any,
    'Delivering Mill': any,
    'Document_Item_Currency': any,
    'Customer Group': any,
    'Market_Customer': any,
    'Amount': any,
    'Currency': any,
    'action': any
}
export interface profileLberiaItaly {
    "sequence_id": any,
    'BusinessCode': any,
    'Market_Country': any,
    'Delivering Mill': any,
    'Product Level 02': any,
    'Product Level 05': any,
    'Document Item Currency': any,
    'Market_Customer': any,
    'Market_Customer_Group': any,
    'Amount': any,
    'Currency': any,
    'action': any
}
export interface transportModeData {
    "sequence_id": any,
    'Product_Division': any,
    'Market_Country': any,
    'Transport_Mode': any,
    'Document_Item_Currency': any,
    'Market_Customer_Group': any,
    'Market_Customer': any,
    'Amount': any,
    'Currency': any,
    'action': any,
}

export interface deliveryMillModeData {
    'sequence_id': any,
    'BusinessCode': any,
    'Beam_Category': any,
    'Market_Customer_Group': any,
    'Market_Customer': any,
    'Market_Country': any,
    'Delivering_Mill': any,
    'Product_Division': any,
    'Document_Item_Currency': any,
    'Amount': any,
    'Currency': any,
    'action': any,
}
//mine
export interface mintonModeData {
    'BusinessCode':any,
    'Country':any,
    'Customer_Group':any,
    'Customer':any,
    'Tonnage':any,
    'Tonnage_From':any,
    'Tonnage_To':any,
    'Amount':any,
    'Currency':any,
    'action':any
}
export interface pricecountModeData {
    'BusinessCode':any,
    'Country':any,
    'Customer_Group':any,
    'Custromer':any,
    'UnitOf_Quantity':any,
    'Amount':any,
    'Currency':any,
    'action':any 
}
export interface disearlyptm {
    'BusinessCode':any,
    'Country':any,
    'Customer_Group':any,
    'Customer':any,
    'Value':any,
    'Unit':any
}