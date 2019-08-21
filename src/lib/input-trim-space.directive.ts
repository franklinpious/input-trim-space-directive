import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputTrimSpaceInputTrimSpace]'
})
export class InputTrimSpaceDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('blur' , ['$event.target', '$event.target.value'])
  onInput(el: any, value: string): void {
    if (this.element.nativeElement.type === 'text' || this.element.nativeElement.type === 'textarea') {
      if ('function' === typeof value.trim && value.trim() !== value) {
        this.trimValue(el, value);
        this.dispatchEvent(el, 'blur');
      }
    }
  }

  private dispatchEvent(el, eventType) {
    const event = document.createEvent('Event');
    event.initEvent(eventType, false, false);
    el.dispatchEvent(event);
  }

  private trimValue(el, value) {
    el.value = value.trim();
    this.dispatchEvent(el, 'input');
  }

}
