import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[injecter-host]',
})
export class InjecterDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

