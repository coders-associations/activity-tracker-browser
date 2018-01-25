import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { RouterModule } from '@angular/router';

const components = [
    MenuComponent,
    ActionButtonsComponent,
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
