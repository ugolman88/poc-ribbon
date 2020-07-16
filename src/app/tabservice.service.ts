
import { Injectable } from '@angular/core';
import { TabItem } from 'src/tabitem';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private tabsChange = new Subject<TabItem>();
  tabsChange$ = this.tabsChange.asObservable();
  tabs: TabItem[] = [] as TabItem[];
  selectedTab: TabItem;

  constructor() {}

  addTab(tabItem: TabItem): void {
    if (this.tabs.find((d) => d.label === tabItem.label) === undefined) {
      this.tabs.push(tabItem);
    }
    this.selectedTab = tabItem;
    this.tabsChange.next(tabItem);
  }

  changeTab(tabItem: TabItem): void {
    this.tabsChange.next(tabItem);
  }

  getTabs(): TabItem[] {
    return this.tabs;
  }
  removeTab(tabItem: TabItem): void {
    if (this.tabs.length > 1) {
      //qui ci va l'ultimo tab aperto
      const indextabfounded = this.tabs.findIndex(
        (it) => it.label === tabItem.label
      );
      if (indextabfounded !== -1) {
        this.tabs.splice(indextabfounded, 1);
      }
    } else {
      //se chiudo tutte i tab apro la home
      this.tabs = [];
      this.selectedTab = this.tabs[0];
    }
    this.tabsChange.next(tabItem);
  }
}
