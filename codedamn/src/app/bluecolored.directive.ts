import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bluecolored]'
})
export class BluecoloredDirective {

  constructor(element: ElementRef) {
element.nativeElement.style.color="blue";
   }
   @HostListener('mouseenter') doSomething()
   {
     console.log('Mouse just entered');
   }
   @HostListener('mouseleave') doSomething1()
   {
     console.log('Mouse just left');
   }


}
