import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[injecterhost]',
})
export class InjecterDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

