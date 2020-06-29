import { TabItem } from 'src/tabitem';
import { InjecterDirective } from './../injecter.directive';
import { Component, OnInit, Input, ComponentFactoryResolver,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
})
export class TabContentComponent implements OnInit {
  @Input() tab;
  @ViewChild(InjecterDirective, { static: true }) injecterDirective: InjecterDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const tab: TabItem = this.tab;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      tab.componentName
    );
    const viewContainerRef = this.injecterDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
