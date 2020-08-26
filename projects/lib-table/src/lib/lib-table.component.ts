import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lib-lib-table',
  templateUrl: './lib-table.component.html',
  styleUrls: ['./lib-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibTableComponent implements OnInit {
  dataArray = [];
  cols = [];
  tableType: string;
  exportColumns = [];
  constructor() { }


  @Input('tableCols') tableCols;
  @Input('tableData') tableData;
  @Input('tableTypeData') tableTypeData;

  ngOnInit(): void {
    this.dataArray = this.tableData;
    this.cols = this.tableCols;
    this.tableType = this.tableTypeData;
  }
}