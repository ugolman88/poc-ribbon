import { Component } from '@angular/core';

export interface TabItem {
  link: string;
  label: string;
  index?: number;
  componentName: any;
}
