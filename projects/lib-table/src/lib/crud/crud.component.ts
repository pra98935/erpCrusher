import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Message} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'lib-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService]
})
export class CrudComponent implements OnInit {

  @Input('tableCols') tableCols;
  @Input('tableData') tableData;

  msgs: Message[] = [];
  displayDialog: boolean;
  displayDeleteDialog: boolean;


  dataArray = [];
  cols = [];
  exportColumns = [];
  dataKeyForCrud: string;

  constructor(private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.dataKeyForCrud = this.tableCols[0].field;
    this.dataArray = this.tableData;
    this.cols = this.tableCols;
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  exportPdf() {
      // import("jspdf").then(jsPDF => {
      //     import("jspdf-autotable").then(x => {
      //         const doc = new jsPDF.default(0,0);
      //         doc.autoTable(this.exportColumns, this.dataArray);
      //         doc.save('primengTable.pdf');
      //     })
      // })
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.getCars());
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      import("file-saver").then(FileSaver => {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data: Blob = new Blob([buffer], {
              type: EXCEL_TYPE
          });
          FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      });
  }

  getCars() {
    let dataArray = [];
    for(let item of this.dataArray) {
        dataArray.push(item);
    }
    return dataArray;
  }

  editRow(raw){
    console.log('edit');
    console.log(raw);
    //this.displayDialog = true;

    this._confirmationService.confirm({
        //message: 'Edit Record',
        header: 'Edit',
        icon: 'pi pi-info-circle',
        accept: () => {
            //this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            //this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        },
        key: "editDialog"
    });

  }

  deleteRow(raw){
    //this.displayDeleteDialog = true;
    this._confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          //this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
          //this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      },
      key: "deleteDialog"
  });
  }

  delete(){

  }
  
  save(){

  }

}
