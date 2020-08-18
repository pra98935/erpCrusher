import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-lib-header',
  templateUrl: './lib-header.component.html',
  styleUrls: ['./lib-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
