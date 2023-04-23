import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items: MenuItem[];

  constructor() {
    this.items = []; // initialize the items array here
  }

ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: '/'
        },
        {
            label: 'Courses',
            icon: 'pi pi-fw pi-sitemap',
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            routerLink: 'events'
        },
        {
            label: 'Complier',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: 'editor'
            // <i class="fas fa-pi"></i>
        },{
          label: 'Spin-Me-Quiz',
          icon: 'pi pi-fw pi-spinner',
          routerLink: 'spinme'
      },{
        label: 'Games-center',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: 'games'
    }
    ];
}}
