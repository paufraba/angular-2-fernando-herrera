import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'caps'
})
export class CapsPipe implements PipeTransform {
    transform(value: string, capsAll:boolean=true): string {
        console.log(capsAll);

        var splitStr = value.toLowerCase().split(' ');

        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            if (!capsAll) break;
        }

        return splitStr.join(' ');
    }
}
