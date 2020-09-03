export class AddAccountModel{
    accountName: string;
    chequePrintName: string;
    accountGrpArray = [];
    selectedAccountGrp: string;
    openingBalance: string;
    transferTypeArray = [];
    selecetedTransferType: string;
    date: Date;
}

export class addressDetailsModel{
    billingAddress: string;
    cityArray = [];
    selectedCity: string;
    pincode: number;
    contact: number;
    email: string;
}

export class bankDetailsModel{
    accountName: number;
    accountTypeArray = [];
    selectedAccountType: string;
    ifscCode: string;
    bankName: string;
    bankBranch: string;

    bankCode: string;
    branchCode: string;
    interestRate: number;
    // interestRateArray = [];
    // selectedInterestRate: string;
    calculationTypeArray = [];
    selectedCalculationType: string;
    dabitCreaditLimit: number;
    transferTypeArray = [];
    selecetedTransferType: string;
    daysArray = [];
    selectedDays: string;
}

export class taxDetailsModel{
    panNumber: string;
    tdsApplicable: boolean;

    stateArray = [];
    selectedState: string;
    gstNumber: any;
    address: string;
    reamark: string;
}

export class contactDetailsModel{
    contactPerson: string;
    designation: string;
    jobSite: string;
    address: string;
    city: string;
    pin: number;
    phone: number;
    gstNumber: any;
}

export class kycUploadModel{
    documentArray = [];
    selectedDocument: string;
    remark: string;
    upload: string;
}