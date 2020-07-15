import { RibbonService } from './../ribbonservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {

  data: any = {};

  constructor(private ribbonService: RibbonService) { }

  async ngOnInit() {
    this.data = await this.ribbonService.getRibbonConfigContext('Home');
  }
  onClick(event) {
    console.log(event);
}
}
