import { TabItem } from 'src/tabitem';
import { async } from '@angular/core/testing';

import { TabService } from './../tabservice.service';
import { RibbonService } from './../ribbonservice.service';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {
  @Input() link: TabItem;
  data: any = {};
  context: string;

  constructor(
    private ribbonService: RibbonService,
    private tabService: TabService
  ) {}

  async ngOnInit() {
   // this.tabService.tabsAdd$.subscribe(async (d) => {
      this.context = this.link.label;
      this.data = await this.ribbonService.getRibbonConfigContext(this.context);
   // });
  }
  onClick(event) {
    this.ribbonService.clickedEventAction(event, this.context);
    console.log(event);
  }
}
