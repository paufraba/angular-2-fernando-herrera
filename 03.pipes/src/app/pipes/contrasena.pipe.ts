import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

    transform(value: any, active:boolean=true): string {
        if (active)
            return "*".repeat(value.length);
        else
            return value;
    }
}
