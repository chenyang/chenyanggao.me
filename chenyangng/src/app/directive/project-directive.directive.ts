import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[project-host]'
})
export class ProjectDirective {
  constructor(public viewContainerRef: ViewContainerRef ) { }
}
