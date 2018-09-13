import { Component } from '@angular/core';

@Component({
    selector: 'app-donuts',
    templateUrl: './donuts.component.html',
    styles: []
})
export class DonutsComponent {

    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType = 'doughnut';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public random() {
        this.doughnutChartData = [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ];
    }

}
