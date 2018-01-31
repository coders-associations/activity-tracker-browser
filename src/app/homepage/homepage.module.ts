import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { RouterModule } from '@angular/router';

const components = [
    LandingPageComponent,
    HeroSectionComponent,
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: components,
    exports: [
        LandingPageComponent
    ],
    providers: []
})

export class HomepageModule { }
