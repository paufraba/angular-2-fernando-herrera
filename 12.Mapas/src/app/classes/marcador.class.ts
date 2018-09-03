export class Marcador {
    public latitud: number;
    public longitud: number;
    public titulo = 'Sin título';
    public descripcion = 'Sin descripción';

    constructor(latitud: number, longitud: number) {
        this.latitud = latitud;
        this.longitud = longitud;
    }
}