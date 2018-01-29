import { Component, OnInit } from '@angular/core';
import { SideNavItemModel } from '../../models/side-nav-item';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    items: [SideNavItemModel];

    constructor() {
        this.items = [
            {
                icon: 'dashboard',
                title: 'Activities',
                link: 'activities',
                isActive: false
            },
            {
                icon: 'history',
                title: 'History',
                link: 'history',
                isActive: false
            },
            {
                icon: 'statistics',
                title: 'Statistics',
                link: 'statistics',
                isActive: false
            },
            {
                icon: 'settings',
                title: 'Settings',
                link: 'settings',
                isActive: false
            },
        ];
    }

    ngOnInit() {
    }

}
