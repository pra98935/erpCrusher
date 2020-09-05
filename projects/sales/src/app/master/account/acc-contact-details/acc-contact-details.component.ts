import { Component, OnInit } from '@angular/core';
import { contactDetailsModel, contactDetailsRecordModel } from '../../../models/master/account.model';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({ 
  selector: 'app-acc-contact-details',
  templateUrl: './acc-contact-details.component.html',
  styleUrls: ['./acc-contact-details.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AccContactDetailsComponent implements OnInit {
  contactDetailsModelObj: contactDetailsModel = new contactDetailsModel();
  contactDetailsRecordModelObj: contactDetailsRecordModel = new contactDetailsRecordModel();
  counter: number = 0;
  constructor(private _confirmationService: ConfirmationService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.gstList();
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
            this.contactDetailsModelObj.contactDetailTableArray = this.contactDetailsModelObj.contactDetailTableArray.filter((elem) => {
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
    this.contactDetailsModelObj.addRecordDialoge = true;
  }

  /**
   * @description Delete Record from modal
   */
  deleteRecordFromModal(){
    this.contactDetailsModelObj.addRecordDialoge = false;
    this.resetModal();
  } 

  /**
   * @description Save Record From Modal, 
   */
  saveRecordFromModal(){
   
    // Counter for id and add assign counter to id
    this.counter = this.counter + 1
    this.contactDetailsRecordModelObj.id = this.counter; // taxDetailsRecordObj I took this model so no need to create seprate object for form will pass complete model
    
    // Assign Object to record
    let record = this.contactDetailsRecordModelObj;

    // Add new Record in array
    this.contactDetailsModelObj.contactDetailTableArray.push(record);
    
    this.resetModal();
  }

  /**
   * @description Hide modal and reinitialize object
   */
  resetModal(){
    // Hide modal
    this.contactDetailsModelObj.addRecordDialoge = false;
    
    // Reinitialize object so form will blank when we will add new record
    this.contactDetailsRecordModelObj={};
    this.gstList();
  }

  gstList(){
    this.contactDetailsModelObj.gstNumberArray = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
    ];
  }

}
