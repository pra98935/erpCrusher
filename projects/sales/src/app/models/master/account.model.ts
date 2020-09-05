export class AddAccountModel{
    accountName?: string;
    chequePrintName?: string;
    accountGrpArray? = [];
    selectedAccountGrp?: string;
    openingBalance?: string;
    transferTypeArray? = [];
    selecetedTransferType?: string;
    date?: Date;
}

export class addressDetailsModel{
    billingAddress?: string;
    cityArray? = [];
    selectedCity?: string;
    pincode?: number;
    contact?: number;
    email?: string;
}

export class bankDetailsModel{
    accountName?: number;
    accountTypeArray? = [];
    selectedAccountType?: string;
    ifscCode?: string;
    bankName?: string;
    bankBranch?: string;

    bankCode?: string;
    branchCode?: string;
    interestRate?: number;
    // interestRateArray = [];
    // selectedInterestRate: string;
    calculationTypeArray? = [];
    selectedCalculationType?: string;
    dabitCreaditLimit?: number;
    transferTypeArray? = [];
    selecetedTransferType?: string;
    daysArray? = [];
    selectedDays?: string;
    bankTableArray? = [];
    addRecordDialoge?: boolean = false;
}

export class bankDetailsRecordModel{
    accountNumber?: number;
    selectedAccountType?: string;
    ifscCode?: string;
    bankName?: string;
    bankBranch?: string;
    id?: number = 0;
}

export class taxDetailsModel{
    panNumber?: string;
    tdsApplicable?: boolean;

    stateArray? = [];
    selectedState?: string;
    gstNumber?: any;
    address?: string;
    reamark?: string;
    id?: number;

    addRecordDialoge?: boolean = false;

    taxTableArray? = [];
}

export class taxDetailsRecord{
    selectedState?: string;
    gstNumber?: any;
    address?: string;
    remark?: string;
    id?: number = 0;
}

export class contactDetailsModel{
    contactDetailTableArray? = []; 
    addRecordDialoge?: boolean = false;
    gstNumberArray? = [];

    contactPerson?: string;
    designation?: string;
    jobSite?: string;
    address?: string;
    city?: string;
    pin?: number;
    phone?: number;
    selectedGstNumber?: any;
}

export class contactDetailsRecordModel{
    contactPerson?: string;
    designation?: string;
    jobSite?: string;
    address?: string;
    city?: string;
    pin?: number;
    phone?: number;
    selectedGstNumber?: any;
    id?: number = 0;
}

export class kycUploadModel{
    documentArray? = [];
    selectedDocument?: string;
    remark?: string;
    upload?: string;
    addRecordDialoge?: boolean = false;
    kycTableArray? = []
}

export class kycUploadRecordModel{
    selectedDocument?: string;
    remark?: string;
    upload?: string;
    id?: number = 0;
}