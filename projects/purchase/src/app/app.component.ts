import { Component } from '@angular/core';
import { UIHelper } from './helpers/ui.helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'purchase';
  isMobile:boolean;

  constructor() { }

  ngOnInit(): void {
    // Remove account related class from body
    const element = document.getElementsByTagName("body")[0];
    element.className = "";
 
    // UI operations
    this.isMobile =UIHelper.isMobile();
    UIHelper.manageNavigationPanel();
  }
}
