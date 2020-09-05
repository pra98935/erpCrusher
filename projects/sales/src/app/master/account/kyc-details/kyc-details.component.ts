import { Component, OnInit } from '@angular/core';
import { kycUploadModel, kycUploadRecordModel } from '../../../models/master/account.model';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-kyc-details',
  templateUrl: './kyc-details.component.html',
  styleUrls: ['./kyc-details.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class KycDetailsComponent implements OnInit {
  
  kycUploadModelObj: kycUploadModel = new kycUploadModel();
  kycUploadRecordModelObj: kycUploadRecordModel = new kycUploadRecordModel();
  counter: number = 0;

  constructor(private _confirmationService: ConfirmationService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.documentList();
  }

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
            this.kycUploadModelObj.kycTableArray = this.kycUploadModelObj.kycTableArray.filter((elem) => {
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
   * @description Add new Record
   */
  add(){
    this.kycUploadModelObj.addRecordDialoge = true;
  }

  /**
   * @description Delete Record from modal
   */
  deleteRecordFromModal(){
    this.kycUploadModelObj.addRecordDialoge = false;
    this.resetModal();
  } 

  /**
   * @description Save Record From Modal, 
   */
  saveRecordFromModal(){
   
    // Counter for id and add assign counter to id
    this.counter = this.counter + 1
    this.kycUploadRecordModelObj.id = this.counter; // taxDetailsRecordObj I took this model so no need to create seprate object for form will pass complete model
    
    // Assign Object to record
    let record = this.kycUploadRecordModelObj;

    // Add new Record in array
    this.kycUploadModelObj.kycTableArray.push(record);
    
    this.resetModal();
  }

  /**
   * @description Hide modal and reinitialize object
   */
  resetModal(){
    // Hide modal
    this.kycUploadModelObj.addRecordDialoge = false;
    
    // Reinitialize object so form will blank when we will add new record
    this.kycUploadRecordModelObj={};
    this.documentList();
  }

  documentList(){
    this.kycUploadModelObj.documentArray = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
    ];
  }

}