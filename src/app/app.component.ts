import { TabService } from './tabservice.service';

import {
  Component,
  OnInit,
  ComponentFactoryResolver,

} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedTabIndex = 0;
  navLinks: any[];
  intab = true;

  constructor(
    private tabservice: TabService
  ) {
    this.navLinks = this.tabservice.getTabs();
    this.tabservice.tabsChange$.subscribe((d) => {
      this.navLinks = this.tabservice.getTabs();
   //   this.selectedTabIndex = d.index;
    });
    this.selectedTabIndex = 0;
  }
  ngOnInit(): void {}
  onDeleteTab(tab) {
    this.tabservice.removeTab(tab);
  }
  onTabChanged(event) {
    this.tabservice.changeTab(this.tabservice.tabs[event]);
  }
}
