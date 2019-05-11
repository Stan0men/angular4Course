import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';
import {element} from 'protractor';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnter() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'lightblue');
    // this.renderer.addClass(nativeElement, 'white');
    this.background = 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    // this.renderer.removeClass(nativeElement, 'white');
    this.background = 'transparent';

  }

}
