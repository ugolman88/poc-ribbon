import { Component, OnInit } from '@angular/core';
import { RibbonService } from '../ribbonservice.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss'],
  //providers: [RibbonService],
})
export class FattureComponent implements OnInit {
  constructor(private ribbonService: RibbonService) {}

  ngOnInit(): void {
    this.ribbonService.clickEvent$.subscribe((data: any) => {
      if (data.context === 'Fatture') {
        console.log('action: ' + data.action);
      }
    });
  }
}
