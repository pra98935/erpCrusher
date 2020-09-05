import { Component, OnInit } from '@angular/core';
import {taxDetailsModel, taxDetailsRecord} from '../../../models/master/account.model';
import {MessageService} from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-acc-tax-detail',
  templateUrl: './acc-tax-detail.component.html',
  styleUrls: ['./acc-tax-detail.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AccTaxDetailComponent implements OnInit {
  taxDetailsModelObj: taxDetailsModel = new taxDetailsModel();
  taxDetailsRecordObj: taxDetailsRecord = new taxDetailsRecord();
  counter: number = 0;
  constructor(private _confirmationService: ConfirmationService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.taxDetailsList();
    this.stateList();
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
            this.taxDetailsModelObj.taxTableArray = this.taxDetailsModelObj.taxTableArray.filter((elem) => {
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
    this.taxDetailsModelObj.addRecordDialoge = true;
  }

  /**
   * @description Delete Record from modal
   */
  deleteRecordFromModal(){
    this.taxDetailsModelObj.addRecordDialoge = false;
    this.resetModal();
  } 

  /**
   * @description Save Record From Modal, 
   */
  saveRecordFromModal(){
   
    // Counter for id and add assign counter to id
    this.counter = this.counter + 1
    this.taxDetailsRecordObj.id = this.counter; // taxDetailsRecordObj I took this model so no need to create seprate object for form will pass complete model
    
    // Assign Object to record
    let record = this.taxDetailsRecordObj;

    // Add new Record in array
    this.taxDetailsModelObj.taxTableArray.push(record);
    
    this.resetModal();
  }

  /**
   * @description Hide modal and reinitialize object
   */
  resetModal(){
    // Hide modal
    this.taxDetailsModelObj.addRecordDialoge = false;
    
    // Reinitialize object so form will blank when we will add new record
    this.taxDetailsRecordObj={};
    this.stateList();
  }

  stateList(){
    this.taxDetailsModelObj.stateArray = [
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
    ];
  }

}
