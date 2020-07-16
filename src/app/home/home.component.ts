import { async } from '@angular/core/testing';
import { RibbonService } from './../ribbonservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //providers: [RibbonService],
})
export class HomeComponent implements OnInit {
  constructor(private ribbonService: RibbonService) {}

  ngOnInit(): void {

  }
}
