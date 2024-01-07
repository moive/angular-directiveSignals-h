import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('Constructor directive called');
    console.log(el);
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Hello world!';
  }
  ngOnInit(): void {
    console.log('Directive - NgOnInit() called');
  }
}
