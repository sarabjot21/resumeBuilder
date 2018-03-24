import { Directive, OnInit, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeadingHighlight]'
})
export class HeadingHighlightDirective {

  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue')
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','transparent')
  }

}
