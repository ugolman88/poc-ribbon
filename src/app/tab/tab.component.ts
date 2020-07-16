import { TabItem } from 'src/tabitem';
import { Component, OnInit, Input } from '@angular/core';
import { TabService } from '../tabservice.service';
import { RibbonService } from '../ribbonservice.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  providers: [RibbonService],
})
export class TabComponent implements OnInit {
  @Input() link: TabItem = {} as TabItem;
  constructor(
    private tabservice: TabService,
    private ribbonService: RibbonService
  ) {}

  ngOnInit(): void {
     this.ribbonService.clickEvent$.subscribe((data: any) => {
         console.log('action: ' + data.action);
     });
  }

}
