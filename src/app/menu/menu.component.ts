import { TabService } from './../tabservice.service';
import { TabItem } from './../../tabitem';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FattureComponent } from '../fatture/fatture.component';
import { FornitureComponent } from '../forniture/forniture.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: TabItem[] = [
    { link: 'home', label: 'Home', componentName: HomeComponent },
    {
      link: 'fatture',
      label: 'Fatture',
      index: 1,
      componentName: FattureComponent,
    },
    {
      link: 'forniture',
      label: 'Forniture',
      index: 2,
      componentName: FornitureComponent,
    },
  ];
  constructor(private tabService: TabService) {}

  ngOnInit(): void {}
  addTab(itemselected) {
    this.tabService.addTab(itemselected);
  }
}
