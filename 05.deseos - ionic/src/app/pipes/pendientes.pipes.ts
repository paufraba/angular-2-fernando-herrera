import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/lista';

@Pipe({
    name: 'pendientes',
    pure: false
})
export class PendientesPipe implements PipeTransform {
    transform(listas: Lista[], terminada: boolean = false): Lista[] {
        let nuevaLista:Lista[] = [];

        for (let lista of listas) {
            if (lista.terminada == terminada) {
                nuevaLista.push( lista );
            }

        };

        return nuevaLista;
    }
}
