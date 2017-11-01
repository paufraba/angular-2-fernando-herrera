import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appResaltado]'
})
export class ResaltadoDirective {

    constructor(private el:ElementRef) {
        console.log('Directiva');
    }

    @Input("appResaltado") nuevoColor:string;

    @HostListener('mouseenter') mouseEnter() {
        this.resaltar(this.nuevoColor || 'yellow')
    }
    @HostListener('mouseleave') mouseLeave() {
        this.resaltar(null)
    }

    private resaltar(color:string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}
