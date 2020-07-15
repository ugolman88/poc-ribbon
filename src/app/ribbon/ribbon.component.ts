import { async } from '@angular/core/testing';

import { TabService } from './../tabservice.service';
import { RibbonService } from './../ribbonservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {

  data: any = {};
  context: string;

  constructor(private ribbonService: RibbonService, private tabService: TabService) { }

  async ngOnInit() {
    this.tabService.tabsChange$.subscribe(async d => {
      this.context = d.label;
      this.data = await this.ribbonService.getRibbonConfigContext(this.context);
    });

  }
  onClick(event) {
    console.log(event);
}
}
