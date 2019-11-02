import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { 
    
  }

  @HostListener('mouseenter') addHighlight(){
    this.elementRef.nativeElement.style.backgroundColor = 'gray';
    this.elementRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') removeHighlight(){
    this.elementRef.nativeElement.style.backgroundColor = null;
    this.elementRef.nativeElement.style.color = null;
  }
}
