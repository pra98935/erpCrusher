import { Component, OnInit } from '@angular/core';
import { bankDetailsModel, bankDetailsRecordModel } from '../../../models/master/account.model';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-acc-bank-detail',
  templateUrl: './acc-bank-detail.component.html',
  styleUrls: ['./acc-bank-detail.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AccBankDetailComponent implements OnInit {
  bankDetailsModelObj: bankDetailsModel = new bankDetailsModel();
  bankDetailsRecordModelObj: bankDetailsRecordModel = new bankDetailsRecordModel();
  counter: number = 0;
  constructor(private _confirmationService: ConfirmationService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.calculationList();
    this.daysList();
    this.transferTypeList();
    this.bankTypeList();
  }

  calculationList(){
    this.bankDetailsModelObj.calculationTypeArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  daysList(){
    this.bankDetailsModelObj.daysArray = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];
  }

  transferTypeList(){
    this.bankDetailsModelObj.transferTypeArray = [
        {label: 'DR', value: 'dr'},
        {label: 'CR', value: 'cr'}
    ];
  }

  // ==========

    /**
   * @description Delete Row from Table
   * @param rawId , Row Id
   */
  deleteRow(rawId){
    //this.displayDeleteDialog = true;
    this._confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.bankDetailsModelObj.bankTableArray = this.bankDetailsModelObj.bankTableArray.filter((elem) => {
              return elem.id !== rawId;
            })
            this._messageService.add({severity:'success', summary:'', detail:'Record has been deleted'});
          },
        reject: () => {
            //this._messageService.add({severity:'success', summary:'', detail:''});
        },
        key: "deleteDialog"
    });
  }

  /**
   * @description Tax Detail Array List
   */
  taxDetailsList(){
    // this.taxDetailsModelObj.taxTableArray = [
    //   {
    //     selectedState:'MP',
    //     gstNumber:123456,
    //     address:'Gwalior',
    //     reamark:'Remark',
    //     id:1
    //   }
    // ]
  }

  /**
   * @description Add new Record
   */
  add(){
    this.bankDetailsModelObj.addRecordDialoge = true;
  }

  /**
   * @description Delete Record from modal
   */
  deleteRecordFromModal(){
    this.bankDetailsModelObj.addRecordDialoge = false;
    this.resetModal();
  } 

  /**
   * @description Save Record From Modal, 
   */
  saveRecordFromModal(){
   
    // Counter for id and add assign counter to id
    this.counter = this.counter + 1
    this.bankDetailsRecordModelObj.id = this.counter; // taxDetailsRecordObj I took this model so no need to create seprate object for form will pass complete model
    
    // Assign Object to record
    let record = this.bankDetailsRecordModelObj;

    // Add new Record in array
    this.bankDetailsModelObj.bankTableArray.push(record);
    
    this.resetModal();
  }

  /**
   * @description Hide modal and reinitialize object
   */
  resetModal(){
    // Hide modal
    this.bankDetailsModelObj.addRecordDialoge = false;
    
    // Reinitialize object so form will blank when we will add new record
    this.bankDetailsRecordModelObj={};
    this.bankTypeList();
  }

  bankTypeList(){
    this.bankDetailsModelObj.accountTypeArray = [
      {label: 'SA', value: 'sa'},
      {label: 'CA', value: 'ca'},
      {label: 'CC', value: 'cc'},
    ];
  }

}
