import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Poc-Reloadtab';
  selectedTabIndex: number;
  navLinks: any[];
  constructor(private router: Router) {
    this.navLinks = [
      { link: 'home', label: 'home', index: 0 },
      { link: 'fatture', label: 'fatture', index: 1 },
      { link: 'forniture', label: 'forniture', index: 2 },
    ];
  }

  //ngOnInit(): void {
  //  this.router.events.subscribe((res) => {
  //    this.activeLinkIndex = this.navLinks.indexOf(
  //      this.navLinks.find((tab) => tab.link === '.' + this.router.url)
  //    );
  //  });
  //}
  ngOnInit(): void {}

  //onDeleteTab(tabitem: TabItem): void {
  //  this.tabsService.removeTabs(tabitem);
  //  this.router.navigateByUrl(this.tabsService.selectedTab.routerLink);
  //}

  onTabChange(selectedTabIndex: number): void {
    this.router.navigateByUrl(this.navLinks[selectedTabIndex].link);
    this.selectedTabIndex = selectedTabIndex;
  }
}
