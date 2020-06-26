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
} from '@angular/core';
import { Router } from '@angular/router';
import { InjecterDirective } from './injecter.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(InjecterDirective, { static: true, read: ViewContainerRef }) injecterhost: InjecterDirective;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef;

  selectedTabIndex: number = 0;
  navLinks: any[];
  intab: boolean = true;

  constructor(
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.navLinks = [
      { link: 'home', label: 'home', index: 0, component: HomeComponent },
      {
        link: 'fatture',
        label: 'fatture',
        index: 1,
        component: FattureComponent,
      },
      {
        link: 'forniture',
        label: 'forniture',
        index: 2,
        component: FornitureComponent,
      },
    ];
  }
  ngOnInit(): void {}

  loadComponent() {
    const link = this.navLinks[this.selectedTabIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      link.component
    );

    ///const viewContainerRef = this.myRef.createComponent(componentFactory);
    const viewContainerRef = this.injecterhost.viewContainerRef;
    ///viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
  //ngOnInit(): void {
  //  this.router.events.subscribe((res) => {
  //    this.activeLinkIndex = this.navLinks.indexOf(
  //      this.navLinks.find((tab) => tab.link === '.' + this.router.url)
  //    );
  //  });
  //}

  ngAfterViewInit() {
    this.loadComponent();
  }

  //onDeleteTab(tabitem: TabItem): void {
  //  this.tabsService.removeTabs(tabitem);
  //  this.router.navigateByUrl(this.tabsService.selectedTab.routerLink);
  //}

  onTabChange(selectedTabIndex: number): void {
    this.router.navigateByUrl(this.navLinks[selectedTabIndex].link);
    this.selectedTabIndex = selectedTabIndex;
  }
}
