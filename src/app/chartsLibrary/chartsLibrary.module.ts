import { NgModule } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        LineChartComponent
    ],
    imports: [
        ChartsModule,
        SharedModule
    ],
    exports: [
        LineChartComponent
    ],
    providers: []
})
export class ChartsLibraryModule { }
