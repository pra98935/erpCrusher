import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpandComponent implements OnInit {

  dataArray = [];
  cols = [];
  exportColumns = [];
  constructor() { }

  @Input('tableCols') tableCols;
  @Input('tableData') tableData;
  tableType: string = 'expand'
  dataKeyForExpand: string;

  ngOnInit(): void {
    this.dataKeyForExpand = this.tableCols[0].field;
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

}
