import { TabService } from './tabservice.service';
import { FornitureComponent } from './forniture/forniture.component';
import { FattureComponent } from './fatture/fatture.component';
import { HomeComponent } from './home/home.component';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Router } from '@angular/router';
import { InjecterDirective } from './injecter.directive';
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
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private tabservice: TabService
  ) {
    this.navLinks = this.tabservice.getTabs();
    this.tabservice.tabsChange$.subscribe((d) => {
      this.navLinks = this.tabservice.getTabs();
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
