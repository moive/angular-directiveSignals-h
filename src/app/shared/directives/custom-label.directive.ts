import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    // console.log(value);
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log('Constructor directive called');
    console.log(el);
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Hello world!';
  }
  ngOnInit(): void {
    console.log('Directive - NgOnInit() called');
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errors = Object.keys(this._errors);
    // console.log(errors);
    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'This field is required.';
      return;
    }
    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Min ${current}/${min} characters`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Not a valid email address';
      return;
    }
  }
}
