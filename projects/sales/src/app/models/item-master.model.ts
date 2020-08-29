export class AddItemMasterModel{
    itemName: string;
    itemGroupArray = [];
    selectedItemGroup: string;
    itemShortName: string;
    status: string;
    hsnCode: string;
    stateNameArray = []
    selectedStateName: string;
    ownStateTaxArray=[];
    selectedOwnStateTax: string;
    otherStateTaxArray=[];
    selectedOtherStateTax: string;

}

export class commonModel{
    ownState: string;
}

export class ItemMasterSearchModel{
    itemNameArray=[];
    selectedItemName: string;
    itemGroupArray = [];
    selectedItemGroup: string;
    gstArray=[];
    selectedGST: string;
    status: string;
    userByArray = [];
    selectedUserBy: string;
    selectedUserAction: any[] = [];
}