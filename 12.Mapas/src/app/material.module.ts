import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressBarModule,
        MatCardModule,
        MatSnackBarModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatProgressBarModule,
        MatCardModule,
        MatSnackBarModule
    ],
    declarations: []
})
export class MaterialModule { }
