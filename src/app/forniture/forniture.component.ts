import { Component, OnInit } from '@angular/core';
import { RibbonService } from '../ribbonservice.service';

@Component({
  selector: 'app-forniture',
  templateUrl: './forniture.component.html',
  styleUrls: ['./forniture.component.scss'],
})
export class FornitureComponent implements OnInit {
  constructor(private ribbonService: RibbonService) {}

  ngOnInit(): void {
    this.ribbonService.clickEvent$.subscribe((data: any) => {
       if (data.context === 'Forniture') {
         console.log('action: ' + data.action);
       }
    });
  }
}
